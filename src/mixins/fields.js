import { slug } from '@/helpers'

export default {
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
  },
  created () {
    this.item.value && (this.$parent.$parent.value = this.item.value)
  }
}
