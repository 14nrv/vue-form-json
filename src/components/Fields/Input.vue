<template lang="pug">
  input.input(:id="item.label | slugify",
              :name="item.label | slugify",
              :type="item.type || 'text'",
              :placeholder="item.placeholder",
              :class="{ 'is-danger': !!error }",
              :required="item.isRequired !== false",
              :minlength="item.type !== 'number' ? item.minLength || defaultMinLength : undefined",
              :maxlength="item.type !== 'number' ? item.maxLength || defaultMaxLength : undefined",
              :min="item.type === 'number' ? item.min || defaultMin : undefined",
              :max="item.type === 'number' ? item.max || defaultMax : undefined",
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
