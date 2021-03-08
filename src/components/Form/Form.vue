<template lang="pug">
  ValidationObserver(
    v-slot="{ handleSubmit, invalid }",
    tag="div",
    ref="observer"
  )
    form(:data-vv-scope="formName",
        @submit.prevent="handleSubmit(onSubmit)",
        @reset.prevent="handleReset")

      div(v-for="(item, index) in formFields", :key="index")
        .field-body(v-if="Array.isArray(item)")
          .field(v-for="x in item",
                :key="x.label",
                v-bind="x.field && x.field.attr")
            app-label(:item="x")
            app-control(:item="x", ref="control")

        .field(v-else-if="Object.keys(item).includes('html')",
              v-html="Object.values(item)[0]",
              v-bind="item.attr",
              data-test="htmlContentFromFormFields")

        .field(v-else-if="Object.keys(item).includes('slot')",
              v-bind="item.attr",
              data-test="slot")
          slot(
            :name="item['slot']",
            v-bind="{...item.props, updateFormValues, isFormReseted }"
          )

        .field(v-else, v-bind="item.field && item.field.attr")
          app-label(:item="item")
          app-control(:item="item", ref="control")

      .field.form-footer.is-grouped.is-opposed
        input(type="reset",
              v-bind="btnReset"
              :class="btnReset.class || 'button'")
        input(type="submit",
              v-bind="btnSubmit",
              :class="btnSubmit.class || 'button is-primary'"
              :disabled="invalid")

      p.is-size-7.fieldRequiredLegend {{ mandatoryAsteriskLegend }}
</template>

<script>
import { ValidationObserver } from 'vee-validate/dist/vee-validate.min.js'

import {
  flatten,
  map,
  omit,
  pickAll,
  pipe
} from 'ramda'
import { camelizeKeys } from '@/helpers'

import Label from '@/components/Fields/Label'
import Control from '@/components/Fields/Control'

const getNameOrLabel = ({ label, name }) => name || label
const valueToProp = object => pickAll(object, {})
const removeUndefinedKey = object => omit([undefined], object)

export default {
  name: 'Form',
  components: {
    ValidationObserver,
    appLabel: Label,
    appControl: Control
  },
  props: {
    formFields: {
      type: Array,
      required: true
    },
    formName: {
      type: String,
      required: true
    },
    mandatoryAsteriskLegend: {
      type: String,
      default: '* field required'
    },
    btnSubmit: {
      type: Object,
      default: () => ({})
    },
    btnReset: {
      type: Object,
      default: () => ({})
    },
    resetFormAfterSubmit: {
      type: Boolean,
      default: false
    },
    defaultMin: {
      type: [Boolean, Number],
      default: false
    },
    defaultMax: {
      type: [Boolean, Number],
      default: false
    },
    defaultMinValue: {
      type: [Boolean, Number],
      default: 0
    },
    defaultMaxValue: {
      type: [Boolean, Number],
      default: false
    },
    hasIcon: {
      type: Boolean,
      default: true
    },
    camelizePayloadKeys: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    allControls: [],
    formValues: undefined,
    isFormReseted: false
  }),
  created () {
    this.formValues = pipe(
      flatten,
      map(getNameOrLabel),
      valueToProp,
      removeUndefinedKey
    )(this.formFields)
  },
  mounted () {
    this.allControls = this.$refs.control || []
  },
  methods: {
    async onSubmit (ev) {
      const isValid = await this.$refs.observer.validate()

      const valuesFormatted = Object.assign({}, this.formValues)
      const arrayValuesFormatted = Object.entries(valuesFormatted).reduce(
        (acc, [key, value]) => {
          if (Array.isArray(value)) value = Object.assign([], value)
          return { ...acc, [key]: value }
        }, {})

      if (isValid) {
        this.emitValues({
          formName: this.formName,
          values: this.camelizePayloadKeys
            ? camelizeKeys(arrayValuesFormatted)
            : arrayValuesFormatted
        })
        this.resetFormAfterSubmit && this.handleReset(ev)
      }
    },
    emitValues (data) {
      this.$root.$emit('formSubmitted', data)
    },
    clearValues () {
      const fieldsWithArrayValue = ['radio', 'checkbox']

      this.allControls.map(x => { x.value = '' })

      const subValues = this.allControls.filter(x => x.$children[0].$children[0].value)
      subValues.map(x => {
        const { type } = x.$children[0].$children[0].item
        const hasArrayAsValue = fieldsWithArrayValue.includes(type)

        x.$children[0].$children[0].value = hasArrayAsValue ? [] : ''
      })
    },
    clearPrefillValues () {
      const inputsPrefilled = this.allControls.filter(x => x.item.value)
      inputsPrefilled.map(x => { x.item.value = undefined })

      const selects = this.allControls.filter(x => x.item.type === 'select')
      selects.map(select => {
        select.$el.querySelector('select').selectedIndex =
          select.item.placeholder ? 0 : -1
      })
    },
    resetFormValues () {
      this.clearValues()
      this.clearPrefillValues()
    },
    async handleReset (ev) {
      this.isFormReseted = true
      this.resetFormValues()

      try {
        ev.target.reset()
      } catch (err) {
        // eslint-disable-next-line
        ev && ev.target.reset
      }

      await this.$nextTick()
      this.$refs.observer.reset()
      this.isFormReseted = false
    },
    updateFormValues (obj) {
      this.formValues = { ...this.formValues, ...obj }
    }
  }
}
</script>

<style lang="stylus">
  $defaultMargin = .75rem
  $formWidth = 28rem
  $bp_mobile = 496px

  form
    max-width $formWidth

  .field
  .field-body
    margin-bottom $defaultMargin

  .field-body
    display block

    @media (min-width: $bp_mobile)
      display flex
      justify-content space-between

    .field
      width 100%

      @media (min-width: $bp_mobile)
        width ($formWidth / 2 - $defaultMargin / 2)

  .form-footer
    .button:not(:last-child)
      margin-right $defaultMargin

  .fieldRequiredLegend
    margin-top $defaultMargin * 2

  .field
    &.is-grouped
      &.is-opposed
        display flex
        justify-content space-between

        .control
          line-height 3.6rem

  .error-title
    margin-bottom 0
</style>
