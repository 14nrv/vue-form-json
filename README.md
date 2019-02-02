[![NPM Version](https://img.shields.io/npm/v/vue-form-json.svg)](https://www.npmjs.com/package/vue-form-json)
[![Build Status](https://travis-ci.org/14nrv/vue-form-json.svg?branch=dev)](https://travis-ci.org/14nrv/vue-form-json)
[![Test Coverage](https://api.codeclimate.com/v1/badges/af5a15db118dac6343ab/test_coverage)](https://codeclimate.com/github/14nrv/vue-form-json/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/af5a15db118dac6343ab/maintainability)](https://codeclimate.com/github/14nrv/vue-form-json/maintainability)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

# vue-form-json

[![Edit vue-form-json-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/qzk9431256?autoresize=1&hidenavigation=1&module=%2Fsrc%2FApp.vue&view=preview)

## Generate a responsive vue form with validation and bulma style, from [json](https://github.com/14nrv/vue-form-json/blob/master/src/components/Form/fields.json)
All fields are required and input text by default.
They can have pre filled values.\
Once submitted an event 'formSubmitted' is emitted on $root with the formName and all values.\
Enjoy

## Install
```sh
yarn add vue-form-json vee-validate bulma @fortawesome/fontawesome-free
#fontawesome is not needed if hasIcon props is false
```

## Usage
```js
// main.js
import VeeValidate from 'vee-validate'
// ...
Vue.use(VeeValidate)
// ...
```

```html
<template lang="pug">
  #app.section
    form-json(:formFields="jsonFields",
              :formName="'userProfil'")
      div(slot="slotNameAddedInJsonFields")
        p Your slot content
</template>

<script>
  import formJson from 'vue-form-json'
  import jsonFields from './../assets/fields'

  export default {
    name: 'app',
    components: {
      formJson
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
  @require '../node_modules/vue-form-json/dist/vue-form-json.css'
</style>
```

## Props available on formJson component
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
  },
  resetFormAfterSubmit: {
    type: Boolean,
    default: false
  },
  defaultMinLength: {
    type: [Boolean, Number],
    default: false
  },
  defaultMaxLength: {
    type: [Boolean, Number],
    default: false
  },
  defaultMin: {
    type: [Boolean, Number],
    default: 0
  },
  defaultMax: {
    type: [Boolean, Number],
    default: false
  },
  hasIcon: {
    type: Boolean,
    default: true
  }
}
```
