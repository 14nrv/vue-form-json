<template lang="pug">
  ValidationObserver(v-slot="{ handleSubmit, invalid, reset }", tag="div", ref="form")
    form(:data-vv-scope="formName",
        @submit.prevent="handleSubmit(onSubmit)",
        @reset.prevent="reset")

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
          slot(:name="item['slot']", v-bind="item.props")

        .field(v-else, v-bind="item.field && item.field.attr")
          app-label(:item="item")
          app-control(:item="item", ref="control")

      .field.form-footer.is-grouped.is-opposed
        input(type="reset",
              v-bind="btnReset"
              :class="btnReset.class || 'button'"
              @click="resetForm")
        input(type="submit",
              v-bind="btnSubmit",
              :class="btnSubmit.class || 'button is-primary'"
              :disabled="invalid")

      p.is-size-7.fieldRequiredLegend {{ mandatoryAsteriskLegend }}
</template>

<script>
import { ValidationObserver } from 'vee-validate'

import {
  flatten,
  pickAll,
  pipe,
  map
} from 'ramda'
import { camelizeKeys } from 'humps'

import Label from '@/components/Fields/Label'
import Control from '@/components/Fields/Control'

const getNameOrLabel = ({ label, name }) => name || label
const valueToProp = object => pickAll(object, {})

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
    formValues: undefined,
    allControls: []
  }),
  created () {
    this.formValues = pipe(flatten, map(getNameOrLabel), valueToProp)(this.formFields)
  },
  mounted () {
    this.allControls = this.$refs.control
  },
  methods: {
    async onSubmit (ev) {
      const isValidated = await this.$refs.form.validate()

      if (isValidated) {
        const valuesFormatted = JSON.parse(JSON.stringify(this.formValues))

        this.emitValues({
          formName: this.formName,
          values: this.camelizePayloadKeys
            ? camelizeKeys(valuesFormatted)
            : valuesFormatted
        })
        this.resetFormAfterSubmit && this.resetForm(ev)
      }
    },
    emitValues (data) {
      this.$root.$emit('formSubmitted', data)
    },
    clearValues () {
      const fieldsWithArrayValue = ['radio, checkbox']

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
        select.item.options.map(option => {
          option.selected && !option.disabled && (delete option.selected)
        })
      })
    },
    resetFormValues () {
      this.clearValues()
      this.clearPrefillValues()
    },
    async resetForm (ev) {
      this.resetFormValues()

      try {
        ev.target.reset()
      } catch (err) {
        // eslint-disable-next-line
        ev && ev.target.reset
      }

      await this.$nextTick()
      this.$refs.form.reset()
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
