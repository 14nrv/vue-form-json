<template lang="pug">
  input.input(:id="item.id || item.label | slugify",
              :name="item.name || item.label | slugify",
              :type="item.type || 'text'",
              :placeholder="item.placeholder",
              :required="item.isRequired !== false",
              :minlength="!isInputNumber && !hasPattern ? (item.rules && item.rules.min) || defaultMin : undefined",
              :maxlength="!isInputNumber && !hasPattern ? (item.rules && item.rules.max) || defaultMax : undefined",
              :min="isInputNumber ? (item.rules && item.rules.min_value) || defaultMinValue : undefined",
              :max="isInputNumber ? (item.rules && item.rules.max_value) || defaultMaxValue : undefined",
              :pattern="item.pattern",
              v-bind="{...ariaInput, ...item.attr}",
              :class="[{ 'is-danger': !!error }, item.attr && item.attr.class]",
              v-model="value",
              @input="updateValue",
              @change="updateValue",
              @blur="updateValue")
</template>

<script>
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Input',
  mixins: [fieldsMixin],
  props: {
    ariaInput: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    value: undefined
  }),
  mounted () {
    this.value = this.item.value
  },
  computed: {
    hasPattern () {
      return !!this.item.pattern
    },
    isInputNumber () {
      return this.item.type === 'number'
    },
    form () {
      return this.$parent.$parent
        ? this.$parent.$parent.$parent.$parent
        : {}
    },
    defaultMin () {
      return this.form.defaultMin
    },
    defaultMax () {
      return this.form.defaultMax
    },
    defaultMinValue () {
      return this.form.defaultMinValue
    },
    defaultMaxValue () {
      return this.form.defaultMaxValue
    }
  }
}
</script>
