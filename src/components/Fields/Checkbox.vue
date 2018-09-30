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
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Checkbox',
  mixins: [ fieldsMixin ],
  data: () => ({
    value: []
  }),
  methods: {
    updateValue (ev) {
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
