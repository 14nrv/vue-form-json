<template lang="pug">
  textarea.textarea(:id="item.label | slugify",
                    :name="item.label | slugify",
                    v-bind="item.attr",
                    :class="[{ 'is-danger': !!error }, item.attr && item.attr.class]",
                    v-model="item.value",
                    :data-vv-name="item.label",
                    :required="item.isRequired !== false",
                    :minlength="item.minLength || defaultMinLength",
                    :maxlength="item.maxLength || defaultMaxLength",
                    @input="updateValue",
                    @change="updateValue",
                    @blur="updateValue")
</template>

<script>
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Textarea',
  mixins: [ fieldsMixin ],
  computed: {
    defaultMinLength () {
      return this.$parent.$parent.defaultMinLength
    },
    defaultMaxLength () {
      return this.$parent.$parent.defaultMaxLength
    }
  }
}
</script>
