import slugify from 'slugify'
import { extend } from 'vee-validate'
import { messages } from 'vee-validate/dist/locale/en.json'
import * as rules from 'vee-validate/dist/rules.umd.js'

export const slug = str => slugify(str.toLowerCase()) || str

export const flush = async () => {
  // Flush pending Vue promises
  await new Promise(resolve => setTimeout(resolve, 0))
  // Wait a browser tick to make sure changes are applied
  return new Promise(resolve => setTimeout(resolve, 20))
}

export const extendRules = () => Object.keys(rules).forEach(rule => {
  extend(rule, {
    ...rules[rule],
    message: messages[rule]
  })
})
