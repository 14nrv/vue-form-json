<template lang="pug">
  .control(:class="{'has-icons-left': item.iconLeft, 'has-icons-right': fieldError}")
    component(v-if="item.value",
              v-model.lazy.trim="value",
              :is="`app-${getComponent}`"
              :item="item",
              :error="fieldError",
              :data-vv-name="item.label",
              v-validate.immediate="getValidation")
    component(v-else,
              v-model.lazy.trim="value",
              :is="`app-${getComponent}`"
              :item="item",
              :error="fieldError",
              :data-vv-name="item.label",
              v-validate="getValidation")

    span.icon.is-small.is-left(v-if="item.iconLeft")
      i.fas(:class="`fa-${item.iconLeft}`")
    span.icon.is-small.is-right(v-if="fieldError && item.type !== 'select'")
      i.fas.fa-exclamation-triangle
    p.help.is-danger(v-if="fieldError") {{ fieldError.msg }}
</template>

<script>
import Input from '@/components/Fields/Input'
import Select from '@/components/Fields/Select'
import Textarea from '@/components/Fields/Textarea'
import Checkbox from '@/components/Fields/Checkbox'
import Radio from '@/components/Fields/Radio'

const NOT_NORMAL_INPUT = ['textarea', 'select', 'checkbox', 'radio']

export default {
  name: 'Control',
  components: {
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
      this.$parent.formValues[this.item.label] = val
    }
  },
  computed: {
    fieldError () {
      return this.errors.items.find(
        ({ field }) => field === this.item.label
      )
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
    getValidation () {
      const { type, minLength, maxLength, min, max, pattern } = this.item
      const { defaultMinLength, defaultMaxLength, defaultMin, defaultMax } = this.$parent
      const isNormalInputOrTextarea = this.isNormalInput || type === 'textarea'
      const isInputNumber = type === 'number'
      let validation = { required: this.isRequired }

      pattern
        ? validation = { ...validation, regex: new RegExp(pattern) }
        : isNormalInputOrTextarea && (validation = {
          ...validation,
          email: type === 'email',
          min: !isInputNumber ? minLength || defaultMinLength : false,
          max: !isInputNumber ? maxLength || defaultMaxLength : false,
          min_value: isInputNumber ? min || defaultMin : false,
          max_value: isInputNumber ? max || defaultMax : false
        })

      return validation
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
