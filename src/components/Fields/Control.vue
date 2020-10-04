<template lang="pug">
  ValidationProvider(
    tag="div"
    :vid="item.vid"
    :rules="getRules"
    :name="item.name || item.label"
    :immediate="!!item.value"
    v-slot="{ errors, required, ariaInput }")

    .control(:class="{'has-icons-left': item.iconLeft, 'has-icons-right': shouldShowErrorIcon}")
      component(v-model.lazy.trim="value",
                :is="`app-${getComponent}`"
                :item="item",
                :error="errors[0]",
                :ariaInput="ariaInput")

      span.icon.is-small.is-left(v-if="item.iconLeft")
        i.fas(:class="`fa-${item.iconLeft}`")
      span.icon.is-small.is-right(v-if="shouldShowErrorIcon")
        i.fas.fa-exclamation-triangle
      p.help.is-danger(v-if="errors.length") {{ errors[0] }}
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import Input from '@/components/Fields/Input'
import Select from '@/components/Fields/Select'
import Textarea from '@/components/Fields/Textarea'
import Checkbox from '@/components/Fields/Checkbox'
import Radio from '@/components/Fields/Radio'

const NOT_NORMAL_INPUT = ['textarea', 'select', 'checkbox', 'radio']

export default {
  name: 'Control',
  components: {
    ValidationProvider,
    appInput: Input,
    appSelect: Select,
    appTextarea: Textarea,
    appCheckbox: Checkbox,
    appRadio: Radio
  },
  data: () => ({
    value: undefined
  }),
  watch: {
    value (val) {
      this.$parent.$parent.formValues[this.item.label] = val
    }
  },
  computed: {
    hasIcon () {
      return this.$parent.$parent.hasIcon
    },
    shouldShowErrorIcon () {
      return this.fieldError && this.item.type !== 'select' && this.hasIcon
    },
    fieldError () {
      return this.$children[0].errors[0]
    },
    isRequired () {
      return this.item.isRequired !== false
    },
    isNormalInput () {
      return !NOT_NORMAL_INPUT.includes(this.item.type)
    },
    getComponent () {
      return this.isNormalInput ? 'input' : this.item.type
    },
    getRules () {
      const { type, rules = {}, pattern } = this.item
      const { min, max, min_value: minValue, max_value: maxValue } = rules
      const { defaultMin, defaultMax, defaultMinValue, defaultMaxValue } = this.$parent.$parent
      const isNormalInputOrTextarea = this.isNormalInput || type === 'textarea'
      const isInputNumber = type === 'number'

      let validation = { required: this.isRequired }

      pattern
        ? validation = { ...validation, regex: new RegExp(pattern) }
        : isNormalInputOrTextarea && (validation = {
          ...validation,
          email: type === 'email',
          min: !isInputNumber ? min || defaultMin : false,
          max: !isInputNumber ? max || defaultMax : false,
          min_value: isInputNumber ? minValue || defaultMinValue : false,
          max_value: isInputNumber ? maxValue || defaultMaxValue : false
        })

      return { ...rules, ...validation }
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
