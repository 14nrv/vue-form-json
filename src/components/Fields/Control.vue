<template lang="pug">
  .control.has-icons-right(:class="{'has-icons-left' : item.iconLeft}")
    app-textarea(v-if="item.type == 'textarea'",
                 v-model="value",
                 :item="item",
                 :error="fieldError",
                 :data-vv-name="item.label",
                 v-validate="{ required: isRequired, min: item.minLength || 1, max: item.maxLength || false }")
    app-select(v-if="item.type == 'select'",
               v-model.lazy="value",
               :item="item",
               :error="fieldError",
               :data-vv-name="item.label",
               v-validate="{ required: isRequired }")
    app-checkbox(v-if="item.type == 'checkbox'",
                 v-model="value",
                 :item="item",
                 :error="fieldError",
                 :data-vv-name="item.label",
                 v-validate="{ required: isRequired }")
    app-radio(v-if="item.type == 'radio'",
                 v-model="value",
                 :item="item",
                 :error="fieldError",
                 :data-vv-name="item.label",
                 v-validate="{ required: isRequired }")
    app-input(v-if="item.type == 'number'",
              v-model="value",
              :item="item",
              :error="fieldError",
              :data-vv-name="item.label",
              v-validate="{required: isRequired, numeric: true, min_value: item.min, max_value: item.max}")
    app-input(v-if="isNormalInput",
              v-model="value",
              :item="item",
              :error="fieldError",
              :data-vv-name="item.label",
              v-validate="{required: isRequired, email: item.type == 'email', min: item.minLength || 1, max: item.maxLength || false}")

    span.icon.is-small.is-left(v-if="item.iconLeft")
      i.fas(:class="`fa-${item.iconLeft}`")
    span.icon.is-small.is-right(v-if="fieldError && item.type != 'select'")
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
  data () {
    return {
      parent: this.$parent,
      value: undefined
    }
  },
  watch: {
    value (val) {
      this.parent.formValues[this.item.label] = val
    }
  },
  computed: {
    fieldError () {
      return this.errors.items.find(
        ({ field }) => field === this.item.label
      )
    },
    isRequired () {
      return this.item.isRequired != null
        ? this.item.isRequired
        : true
    },
    isNormalInput () {
      return !NOT_NORMAL_INPUT.includes(this.item.type)
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    formName: {
      type: String,
      required: true
    }
  }
}
</script>
