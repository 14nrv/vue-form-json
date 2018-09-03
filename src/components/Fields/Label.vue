<template lang="pug">
  label.label(:for="item.label | slugify", v-if="!item.dontShowLabel")
    p {{ item.label }}
      span(v-if="item.isRequired != null ? item.isRequired : true")
        sup.has-text-grey-light.is-size-7  *

</template>

<script>
import { slug } from '@/helpers'

export default {
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
