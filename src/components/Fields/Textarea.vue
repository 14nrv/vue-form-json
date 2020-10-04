<template lang="pug">
  textarea.textarea(:id="item.label | slugify",
                    :name="item.name || item.label | slugify",
                    v-bind="item.attr",
                    :class="[{ 'is-danger': !!error }, item.attr && item.attr.class]",
                    v-model="item.value",
                    :data-vv-name="item.label",
                    :required="item.isRequired !== false",
                    :minlength="item.rules && item.rules.min || defaultMin",
                    :maxlength="item.rules && item.rules.max || defaultMax",
                    @input="updateValue",
                    @change="updateValue",
                    @blur="updateValue")
</template>

<script>
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Textarea',
  mixins: [fieldsMixin],
  computed: {
    form () {
      return this.$parent.$parent.$parent.$parent
    },
    defaultMin () {
      return this.form.defaultMin
    },
    defaultMax () {
      return this.form.defaultMax
    }
  }
}
</script>
