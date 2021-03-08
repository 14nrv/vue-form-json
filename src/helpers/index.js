import slugify from 'slugify'
import { camelize } from 'humps'

export const slug = str => slugify(str.toLowerCase()) || str

export const camelizeKeys = (object) =>
  Object.entries(object).reduce(
    (acc, [key, value]) => ({ ...acc, [camelize(key)]: value }),
    {}
  )
