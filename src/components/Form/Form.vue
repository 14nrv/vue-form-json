<template lang="pug">
  form(:data-vv-scope="formName",
       @submit.prevent="beforeSubmit")

    div(v-for="(item, index) in formFields", :key="index")
      .field-body(v-if="Array.isArray(item)")
        .field(v-for="(x, i) in item", :key="x.label")
          app-label(:item="x")
          app-control(:item="x", :formName="formName", ref="control")

      .field(v-else)
        app-label(:item="item")
        app-control(:item="item", :formName="formName", ref="control")

    .field.form-footer.is-grouped.is-opposed
      input.button(type="reset",
                  :value="btnResetText",
                  @click="resetForm")
      input.button.is-primary(type="submit",
                              :value="btnSubmitText",
                              :disabled="!isFormValid")

    p.is-size-7.fieldRequiredLegend {{ mandatoryAsteriskLegend }}
</template>

<script>
import flatten from 'ramda/src/flatten'
import pickAll from 'ramda/src/pickAll'
import pipe from 'ramda/src/pipe'
import map from 'ramda/src/map'

import Label from '@/components/Fields/Label'
import Control from '@/components/Fields/Control'

const getLabels = ({ label }) => label
const valueToProp = object => pickAll(object, {})

export default {
  name: 'Form',
  components: {
    appLabel: Label,
    appControl: Control
  },
  inject: ['$validator'],
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
    btnSubmitText: {
      type: String,
      default: 'Submit'
    },
    btnResetText: {
      type: String,
      default: 'Reset'
    }
  },
  data: () => ({
    formValues: undefined,
    allControls: []
  }),
  created () {
    this.formValues = pipe(flatten, map(getLabels), valueToProp)(this.formFields)
  },
  mounted () {
    this.allControls = this.$refs.control
  },
  computed: {
    isFormValid () {
      const allControlRequire = this.allControls.filter(({ item }) => item.isRequired === undefined)
      const isAllControlRequireWithValue = allControlRequire.every(({ value }) => !!value)
      const isFormValuesEmpty = Object.values(this.formValues).every(x => x === undefined)
      return isAllControlRequireWithValue && !isFormValuesEmpty
    }
  },
  methods: {
    async beforeSubmit (ev) {
      const result = await this.$validator.validateAll(this.formName)
      result && this.isFormValid && this.$root.$emit('formSubmitted', {
        formName: this.formName,
        values: this.formValues
      })

      result && this.resetForm(ev)
    },
    resetFormValues () {
      this.allControls.map(x => { x.value = '' })

      const subValues = this.allControls.filter(x => x.$children[0].value)
      subValues.map(x => { x.$children[0].value = [] })
    },
    resetForm (ev) {
      this.resetFormValues()
      this.errors.clear(this.formName)

      try {
        ev.target.reset()
      } catch (err) {
        // eslint-disable-next-line
        ev && ev.target.reset
      }

      this.$validator.reset()
    }
  }
}
</script>

<style lang="stylus">
  $defaultMargin = .75rem
  $formWidth = 28rem

  form
    max-width $formWidth

  .field
  .field-body
    margin-bottom $defaultMargin

  .field-body
    .help.is-danger
      max-width ($formWidth / 2 - $defaultMargin)

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
          line-height 36px

  .error-title
    margin-bottom 0
</style>
