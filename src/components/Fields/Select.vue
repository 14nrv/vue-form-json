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
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Select',
  mixins: [ fieldsMixin ]
}
</script>

<style lang="stylus">
  .is-fullwidth
    width 100%
</style>
