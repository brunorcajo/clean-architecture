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

  it('should not accept local part larger than 64 chars', () => {
    const email: string = 'l'.repeat(65) + '@email.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept string larger than 320 chars', () => {
    const email: string = 'l'.repeat(64) + '@' + 'd'.repeat(320) + '.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept doamin part larger than 255', () => {
    const email: string = 'local@' + 'd'.repeat(320) + '.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not except empty local part', () => {
    const email: string = '@domain.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not except empty domain part', () => {
    const email: string = 'local@'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not accept domain with a part larger than 63 chars', () => {
    const email: string = 'local@' + 'd'.repeat(64) + '.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not except local part with invalid char', () => {
    const email: string = 'any email@domain.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not except local part with invalid char double dot', () => {
    const email: string = 'any..email@domain.com'
    expect(Email.validate(email)).toBeFalsy()
  })

  it('should not except local part with invalid char in the wrong place', () => {
    const email: string = 'anyemail.@domain.com'
    expect(Email.validate(email)).toBeFalsy()
  })
})
