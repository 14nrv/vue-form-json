<template lang="pug">
  label.label(:for="item.for || item.label | slugify", v-if="item.showLabel !== false")
    p {{ item.alternativeLabel || item.label }}
      span.helpLabel.has-text-grey-light.is-size-7.is-italic(v-if="item.help") {{ item.help }}
      span(v-if="item.isRequired !== false")
        sup.has-text-grey-light.is-size-7 *

</template>

<script>
import { slug } from '@/helpers'

export default {
  name: 'Label',
  filters: {
    slugify: value => slug(value)
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .helpLabel
    margin-left .5rem
    font-weight normal
</style>
