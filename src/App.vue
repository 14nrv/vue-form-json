<template lang="pug">
  #app.section
    app-form(:formFields="jsonFields",
             :formName="'userProfil'")
</template>

<script>
import Form from '@/components/Form'
import jsonFields from '@/components/Form/fields'

export default {
  name: 'app',
  components: {
    appForm: Form
  },
  data: () => ({
    jsonFields
  }),
  mounted () {
    this.$root.$on('formSubmitted', values => alert(JSON.stringify(values)))
  }
}
</script>

<style lang="stylus">
  @require '../node_modules/bulma/css/bulma.min.css'
  @require '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
</style>
