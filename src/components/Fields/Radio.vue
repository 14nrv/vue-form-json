<template lang="pug">
  div
    label.radio(v-for="(x, index) in item.items",
                :key="index",
                :for="x.text || x | slugify")
      input(:id="x.text || x | slugify",
            :name="item.name || item.label | slugify",
            :value="x.value || x.text || x",
            v-model="value",
            :type="item.type",
            :required="item.isRequired !== false",
            v-bind="item.attr",
            :class="[{ 'is-danger': !!error }, item.attr && item.attr.class]",
            @input="updateValue",
            @change="updateValue",
            @blur="updateValue")
      span.checkboxLabel {{ x.text || x }}
</template>

<script>
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Radio',
  mixins: [fieldsMixin],
  data: () => ({
    value: []
  }),
  methods: {
    updateValue () {
      this.$emit('input', this.value)
    }
  },
  mounted () {
    try {
      const { value, text } = this.item.items.find(({ checked }) => checked)

      this.value = value || text
      this.$parent.$parent.value = value || text
    } catch (error) {}
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
