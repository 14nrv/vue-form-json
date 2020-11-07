<template lang="pug">
  ValidationProvider(
    tag="div"
    :vid="item.vid"
    :rules="getRules"
    :name="item.name || item.label | slugify"
    :immediate="!!item.value"
    v-slot="{ errors, ariaInput }")

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
import { slug } from '@/helpers'
import Input from '@/components/Fields/Input'
import Select from '@/components/Fields/Select'
import Textarea from '@/components/Fields/Textarea'
import Checkbox from '@/components/Fields/Checkbox'
import Radio from '@/components/Fields/Radio'

const NOT_NORMAL_INPUT = ['textarea', 'select', 'checkbox', 'radio']

export default {
  name: 'Control',
  filters: {
    slugify: value => slug(value)
  },
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
      const { label, name } = this.item
      this.$parent.$parent.formValues[name || label] = val
    }
  },
  computed: {
    hasIcon () {
      return this.$parent.$parent.hasIcon
    },
    fieldError () {
      return this.$children[0].errors[0]
    },
    shouldShowErrorIcon () {
      return this.fieldError && this.item.type !== 'select' && this.hasIcon
    },
    isNormalInput () {
      return !NOT_NORMAL_INPUT.includes(this.item.type)
    },
    getComponent () {
      return this.isNormalInput ? 'input' : this.item.type
    },
    getRules () {
      const { rules = {}, pattern } = this.item
      rules.required = this.item.isRequired !== false

      let validation
      pattern && (validation = { regex: new RegExp(pattern) })
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
