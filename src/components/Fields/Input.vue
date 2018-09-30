<template lang="pug">
  input.input(:id="item.label | slugify",
              :name="item.label | slugify",
              :type="item.type || 'text'",
              :placeholder="item.placeholder",
              :class="{ 'is-danger': !!error }",
              :required="item.isRequired != null ? item.isRequired : true",
              @input="updateValue",
              @change="updateValue",
              @blur="$emit('blur')")
</template>

<script>
import fieldsMixin from '@/mixins/fields'

export default {
  name: 'Input',
  mixins: [ fieldsMixin ]
}
</script>
