<template lang="pug">
  .select.is-block(:class="{ 'is-danger': !!error }")
    select.is-fullwidth(:id="item.label | slugify",
          :name="item.label | slugify",
          :required="item.isRequired != null ? item.isRequired : true",
          @change="updateValue",
          @blur="$emit('blur')")
      option(v-if="item.placeholder", disabled, selected) {{ item.placeholder }}
      option(v-for="(option, index) in item.options",
             :value="option",
             :key="index") {{ option }}
</template>

<script>
import { slug } from '@/helpers'

export default {
  name: 'Select',
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

<style lang="stylus">
  dangerColor = #ff3860

  .is-fullwidth
    width 100%
</style>
