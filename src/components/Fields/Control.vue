<template lang="pug">
  ValidationProvider(
    tag="div"
    :vid="item.vid"
    :rules="getRules"
    :name="getName"
    :immediate="!!item.value"
    v-slot="{ errors, ariaInput }")

    .control(:class="{'has-icons-left': item.iconLeft, 'has-icons-right': shouldShowErrorIcon}")
      component(v-model.lazy.trim="value",
                v-bind="getDynamicComponentAttrs"
                :item="item",
                :is="dynamicComponent || `app-${getComponent}`",
                :error="errors[0]",
                :ariaInput="ariaInput")

      span.icon.is-small.is-left(v-if="item.iconLeft")
        i.fas(:class="`fa-${item.iconLeft}`")
      span.icon.is-small.is-right(v-if="shouldShowErrorIcon")
        i.fas.fa-exclamation-triangle
      p.help.is-danger(v-if="errors.length") {{ errors[0] }}
</template>

<script>
import { slug } from '@/helpers'
import Checkbox from '@/components/Fields/Checkbox'
import Input from '@/components/Fields/Input'
import Radio from '@/components/Fields/Radio'
import Select from '@/components/Fields/Select'
import Textarea from '@/components/Fields/Textarea'

const NOT_NORMAL_INPUT = [
  'checkbox',
  'radio',
  'select',
  'textarea'
]

export default {
  name: 'Control',
  components: {
    appCheckbox: Checkbox,
    appInput: Input,
    appRadio: Radio,
    appSelect: Select,
    appTextarea: Textarea
  },
  props: {
    dynamicComponent: {
      type: [String, Object, Function],
      default: undefined
    },
    item: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    value: undefined
  }),
  computed: {
    hasIcon () {
      return this.$parent.$parent.hasIcon
    },
    fieldError () {
      return this.$children[0].errors[0]
    },
    shouldShowErrorIcon () {
      return this.fieldError &&
        this.item.type !== 'select' &&
        this.hasIcon &&
        !this.dynamicComponent
    },
    isNormalInput () {
      return !NOT_NORMAL_INPUT.includes(this.item.type)
    },
    getName () {
      return this.item.name ||
        (this.item.label && slug(this.item.label)) ||
        this.item.attr.name ||
        this.item.is
    },
    getComponent () {
      return this.isNormalInput ? 'input' : this.item.type
    },
    getDynamicComponentAttrs () {
      const { is, attr } = this.item
      return is && attr ? attr : {}
    },
    getRules () {
      const { rules = {}, pattern } = this.item
      rules.required = this.item.isRequired !== false

      let validation
      pattern && (validation = { regex: new RegExp(pattern) })
      return { ...rules, ...validation }
    }
  },
  watch: {
    value (val) {
      const { label, name, is } = this.item
      this.$parent.$parent.formValues[name || label || is] = val
    }
  }
}
</script>
