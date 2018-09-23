<template lang="pug">
  input.input(:id="item.label | slugify",
              :name="item.label | slugify",
              :type="item.type || 'text'",
              :placeholder="item.placeholder",
              :class="{ 'is-danger': !!error }",
              :required="item.isRequired != null ? item.isRequired : true",
              @input="updateValue",
              @change="updateValue",
              @blur="$emit('blur')")
</template>

<script>
import { slug } from '@/helpers'

export default {
  name: 'Input',
  filters: {
    slugify: value => slug(value)
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    error: {
      required: true
    }
  },
  methods: {
    updateValue (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>
