<template lang="pug">
  div
    label.radio(v-for="(x, index) in item.items",
                :key="index",
                :for="x | slugify")
      input(:id="x | slugify",
            :name="item.label | slugify",
            :value="x",
            v-model="value",
            :type="item.type",
            :class="{ 'is-danger': !!error }",
            @input="updateValue",
            @change="updateValue",
            @blur="updateValue")
      span.checkboxLabel {{ x }}
</template>

<script>
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Radio',
  mixins: [ fieldsMixin ],
  data: () => ({
    value: []
  }),
  methods: {
    updateValue () {
      this.$emit('input', this.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .radio
    margin-right 1rem

    .checkboxLabel
      margin-left .5rem

    & + .radio
      margin-left inherit
</style>
