import { extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import { messages } from 'vee-validate/dist/locale/en.json'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})

new Vue({
  render: h => h(App)
}).$mount('#app')
