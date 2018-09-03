[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

# vue-json-form

## Generate a vue form with validation and bulma style, from [json](https://github.com/14nrv/vue-json-form/blob/master/src/components/Form/fields.json)
All fields are required and input text by default.\
Once submitted an event 'formSubmitted' is emitted on $root with the formName and all values.\
Enjoy

```html
<template lang="pug">
  #app.section
    app-form(:formFields="jsonFields",
             :formName="'myAwesomeFormGenerated'")
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
```

## Props available
```js
props: {
  formFields: {
    type: Array,
    required: true
  },
  formName: {
    type: String,
    required: true
  },
  mandatoryAsteriskLegend: {
    type: String,
    default: '* field required'
  },
  btnSubmitText: {
    type: String,
    default: 'Submit'
  },
  btnResetText: {
    type: String,
    default: 'Reset'
  }
}
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Run your unit tests
```
yarn test:unit
```
