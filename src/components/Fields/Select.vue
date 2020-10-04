<template lang="pug">
  .select.is-block(:class="{ 'is-danger': !!error }")
    select.is-fullwidth(:id="item.label | slugify",
          :name="item.name || item.label | slugify",
          :required="item.isRequired !== false",
          v-bind="item.attr",
          @change="updateValue",
          @blur="updateValue")
      option(v-if="item.placeholder", disabled, selected, value="") {{ item.placeholder }}
      option(v-for="(option, index) in item.options",
             :value="option.value || option.text || option",
             :selected="option.selected",
             :key="index") {{ option.text || option }}
</template>

<script>
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Select',
  mixins: [fieldsMixin],
  mounted () {
    const optionSelected = this.item.options && this.item.options.find(x => typeof x === 'object' && x.selected)
    this.$parent.$parent.value = optionSelected
      ? optionSelected.value || optionSelected.text
      : undefined
  }
}
</script>

<style lang="stylus">
  .is-fullwidth
    width 100%
</style>
