import { Email } from './email'

describe('Email validation', () => {
  it('should not accept null string', () => {
    const email = null as any

    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept empty string', () => {
    const email: string = ''

    expect(Email.validate(email)).toBeFalsy()
  })

  it('should accept valid email', () => {
    const email = 'any@email.com'

    expect(Email.validate(email)).toBeTruthy()
  })
})
