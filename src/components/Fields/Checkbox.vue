<template lang="pug">
  div
    label.checkbox(v-for="(x, index) in item.items",
                  :key="index",
                  :for="x | slugify")
      input(:id="x | slugify",
            :name="item.label | slugify",
            :value="x",
            v-model="value",
            :type="item.type",
            :placeholder="item.placeholder",
            :class="{ 'is-danger': !!error }",
            @input="updateValue",
            @change="updateValue",
            @blur="$emit('blur')")
      span.checkboxLabel {{ x }}
</template>

<script>
import { slug } from '@/helpers'

export default {
  name: 'Checkbox',
  filters: {
    slugify: value => slug(value)
  },
  data: () => ({
    value: []
  }),
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
    updateValue () {
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .checkbox
    margin-right 1rem

    .checkboxLabel
      margin-left .5rem
</style>
