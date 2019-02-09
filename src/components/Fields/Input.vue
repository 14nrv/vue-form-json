<template lang="pug">
  input.input(:id="item.label | slugify",
              :name="item.label | slugify",
              :type="item.type || 'text'",
              :placeholder="item.placeholder",
              :required="item.isRequired !== false",
              :minlength="!isInputNumber && !hasPattern ? item.minLength || defaultMinLength : undefined",
              :maxlength="!isInputNumber && !hasPattern ? item.maxLength || defaultMaxLength : undefined",
              :min="isInputNumber ? item.min || defaultMin : undefined",
              :max="isInputNumber ? item.max || defaultMax : undefined",
              :pattern="item.pattern",
              v-bind="item.attr",
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
  mixins: [ fieldsMixin ],
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
    defaultMin () {
      return this.$parent.$parent.defaultMin
    },
    defaultMax () {
      return this.$parent.$parent.defaultMax
    },
    defaultMinLength () {
      return this.$parent.$parent.defaultMinLength
    },
    defaultMaxLength () {
      return this.$parent.$parent.defaultMaxLength
    }
  }
}
</script>
