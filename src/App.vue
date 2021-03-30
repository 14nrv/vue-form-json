<template lang="pug">
  #app.section
    app-form(:btnReset="{ value: 'Reset' }",
             :btnSubmit="{ value: 'Submit' }",
             :formFields="jsonFields",
             formName="userProfil")
      template(#boxSlot="{ prop }")
        .box
          article
            .content
              p
                strong.has-text-info Info<br>
                | You can also use
                strong  {{ prop }}
                |  like this one
</template>

<script>
import Form from '@/components/Form'
import jsonFields from '@/components/Form/fields'

export default {
  name: 'App',
  components: {
    appForm: Form
  },
  computed: {
    jsonFields: () => jsonFields
  },
  mounted () {
    this.$root.$on('formSubmitted', values => alert(JSON.stringify(values)))
  }
}
</script>

<style lang="stylus">
  .labelDefaultMb
    margin-bottom .5rem
</style>
