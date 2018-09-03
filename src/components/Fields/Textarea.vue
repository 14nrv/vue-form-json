<template lang="pug">
  textarea.textarea(:id="item.label | slugify",
                    :name="item.label | slugify",
                    :class="{ 'is-danger': !!error }",
                    :data-vv-name="item.label",
                    :required="item.isRequired != null ? item.isRequired : true",
                    @input="updateValue",
                    @change="updateValue",
                    @blur="$emit('blur')")
</template>

<script>
import { slug } from '@/helpers'

export default {
  name: 'Textarea',
  filters: {
    slugify: value => slug(value)
  },
  data () {
    return {
      formName: this.$parent.formName
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    error: {
      required: false
    }
  },
  methods: {
    updateValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
