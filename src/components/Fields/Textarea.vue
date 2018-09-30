<template lang="pug">
  textarea.textarea(:id="item.label | slugify",
                    :name="item.label | slugify",
                    :class="{ 'is-danger': !!error }",
                    :data-vv-name="item.label",
                    :required="item.isRequired != null ? item.isRequired : true",
                    :minlength="item.minLength",
                    :maxlength="item.maxLength",
                    @input="updateValue",
                    @change="updateValue",
                    @blur="$emit('blur')")
</template>

<script>
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Textarea',
  mixins: [ fieldsMixin ]
}
</script>
