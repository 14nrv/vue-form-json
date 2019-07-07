import { slug } from './'

describe('helpers', () => {
  it('slugify string', () => {
    expect(slug('First Name')).toBe('first-name')
  })

  it('slugify only ASCII characters', () => {
    expect(slug('本社名 または 屋号 Company Name')).toBe('company-name')
  })

  it('return default string if non ASCII characters', () => {
    const str = '本社名 または 屋号'
    expect(slug(str)).toBe(str)
  })
})
