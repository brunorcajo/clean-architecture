import { Email } from './email'

describe('Email validation', () => {
  it('should not accept null string', () => {
    const email: string = null as any
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept empty string', () => {
    const email: string = ''
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should be a valid email', () => {
    const email: string = 'any@email.com'
    expect(Email.validate(email)).toBeTruthy()
  })
})
