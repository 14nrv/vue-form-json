<template lang="pug">
  #app.section
    app-form(:formFields="jsonFields",
             formName="userProfil",
             :btnSubmit="{value: 'Submit'}",
             :btnReset="{value: 'Reset'}")
      div(slot="boxSlot")
        .box
          article
            .content
              p
                strong.has-text-info Info<br>
                | You can also use
                strong  named slot
                |  like this one
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
  .labelDefaultMb
    margin-bottom .5rem
</style>
