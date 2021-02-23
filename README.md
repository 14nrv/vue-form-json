[![NPM Version](https://img.shields.io/npm/v/vue-form-json.svg)](https://www.npmjs.com/package/vue-form-json)
[![Build Status](https://travis-ci.org/14nrv/vue-form-json.svg?branch=dev)](https://travis-ci.org/14nrv/vue-form-json)
[![Test Coverage](https://api.codeclimate.com/v1/badges/af5a15db118dac6343ab/test_coverage)](https://codeclimate.com/github/14nrv/vue-form-json/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/af5a15db118dac6343ab/maintainability)](https://codeclimate.com/github/14nrv/vue-form-json/maintainability)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# vue-form-json

[![Edit vue-form-json-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-form-json-demo-t97l5?file=/src/main.js)

## Generate a vue form with validation from [an array](https://github.com/14nrv/vue-form-json/blob/master/src/components/Form/fields.json)
All fields are required and input text by default.
Once submitted, an event 'formSubmitted' is emitted on $root with the formName and all values.

## Key Features
- [x] Generate a form from json / array (formFields props)
- [x] Bulma classes by default (that can be overwritten)
- [x] Responsive
- [x] Fields on multiples columns
  ```js
  const formFields = [ [{ label: 'label one' }, { label: 'label two' }] ]
  ```
- [x] Pre filled values
  ```js
  const formFields = [{ label: 'the label', value: 'the value' }]
  ```
- [x] [Simple rules validation](https://logaretm.github.io/vee-validate/guide/rules.html#rules)
  ```js
  const formFields = [{ label: 'the label', rules: { is_not: 'label' } }]
  ```
- [x] Cross field validation (see password confirmation example in the CodeSandbox link)
- [x] Custom attr (class, data-*, ...) on .field & real fields (input, textarea...)
  ```js
  const formFields = [{
    attr: { class: 'classOnInput' },
    alternativeLabel: 'an alternative label text that will be displayed',
    field: { attr: { class: 'classOnFieldClassName' } },
    label: 'the label'
  }]
  ```
- [x] Scoped slot everywhere inside form
  ```js
  const formFields = [{ slot: 'nameOfTheSlot', props: { foo: 'bar' } }]
  ```
- [x] Html directly inside json (formFields props)
  ```js
  const formFields = [{ html: '<p>Your html content</p>' }]
  ```

## Install
```sh
yarn add vue-form-json
# Optional: bulma @fortawesome/fontawesome-free (fontawesome is not needed if hasIcon props is false)
```

## Usage
```js
// main.js
import { extend, ValidationProvider } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'
// ...
Vue.component('ValidationProvider', ValidationProvider)

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})
// ...
```

```html
<template lang="pug">
  #app.section
    form-json(:btnReset="{value: 'Reset'}",
              :btnSubmit="{value: 'Submit'}",
              :formFields="jsonFields",
              formName="userProfil")
      template(#slotNameAddedInJsonFields="{ prop }")
        p Your slot content and {{ prop }}
</template>

<script>
  import formJson from 'vue-form-json'
  import jsonFields from './../assets/fields'

  export default {
    name: 'app',
    components: {
      formJson
    },
    mounted () {
      this.$root.$on('formSubmitted', values => alert(JSON.stringify(values)))
    },
    computed: {
      jsonFields: () => jsonFields
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
  btnSubmit: {
    type: Object,
    default: () => ({})
  },
  btnReset: {
    type: Object,
    default: () => ({})
  },
  resetFormAfterSubmit: {
    type: Boolean,
    default: false
  },
  defaultMin: {
    type: [Boolean, Number],
    default: false
  },
  defaultMax: {
    type: [Boolean, Number],
    default: false
  },
  defaultMinValue: {
    type: [Boolean, Number],
    default: 0
  },
  defaultMaxValue: {
    type: [Boolean, Number],
    default: false
  },
  hasIcon: {
    type: Boolean,
    default: true
  },
  camelizePayloadKeys: {
    type: Boolean,
    default: false
  }
}
```
