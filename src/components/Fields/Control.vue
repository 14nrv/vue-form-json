<template lang="pug">
  .control.has-icons-right(:class="{'has-icons-left' : item.iconLeft}")
    app-textarea(v-if="item.type == 'textarea'",
                 v-model="value",
                 :item="item",
                 :error="fieldError",
                 :data-vv-name="item.label",
                 v-validate="{ required: item.isRequired != null ? item.isRequired : true, min: item.min || 3 }")
    app-select(v-if="item.type == 'select'",
               v-model.lazy="value",
               :item="item",
               :error="fieldError",
               :data-vv-name="item.label",
               v-validate="{ required: item.isRequired != null ? item.isRequired : true }")
    app-checkbox(v-if="item.type == 'checkbox'",
                 v-model="value",
                 :item="item",
                 :error="fieldError",
                 :data-vv-name="item.label",
                 v-validate="{ required: item.isRequired != null ? item.isRequired : true }")
    app-radio(v-if="item.type == 'radio'",
                 v-model="value",
                 :item="item",
                 :error="fieldError",
                 :data-vv-name="item.label",
                 v-validate="{ required: item.isRequired != null ? item.isRequired : true }")
    app-input(v-if="item.type != 'textarea' && item.type != 'select' && item.type != 'checkbox' && item.type != 'radio'",
              v-model="value",
              :item="item",
              :error="fieldError",
              :data-vv-name="item.label",
              v-validate="{ required: item.isRequired != null ? item.isRequired : true, email: item.type == 'email', min: item.min || 3 }")

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
        ({ field, scope }) => field === this.item.label && this.formName === scope
      )
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
