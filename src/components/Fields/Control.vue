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

const NOT_NORMAL_INPUT = ['textarea', 'select', 'checkbox', 'radio', 'number']

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
      return (this.isNormalInput || this.item.type === 'number')
        ? 'input'
        : this.item.type
    },
    getValidation () {
      const { type, minLength, maxLength, min, max } = this.item
      const { defaultMinLength, defaultMaxLength, defaultMin, defaultMax } = this.$parent
      let validation = { required: this.isRequired }

      if (this.isNormalInput || type === 'textarea') {
        validation = {
          ...validation,
          min: minLength || defaultMinLength,
          max: maxLength || defaultMaxLength
        }
      }

      this.isNormalInput && (validation = { ...validation, email: type === 'email' })

      type === 'number' && (validation = {
        ...validation,
        min_value: min || defaultMin,
        max_value: max || defaultMax
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
