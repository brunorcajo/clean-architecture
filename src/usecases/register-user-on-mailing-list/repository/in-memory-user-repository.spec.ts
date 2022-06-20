import { UserData } from '../user-data'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User repository', () => {
  it('should return null if user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)

    const user = await userRepo.findUserByEmail('any@mail.com')

    expect(user).toBeNull()
  })

  it('should return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@email.com'

    const userRepo = new InMemoryUserRepository(users)

    await userRepo.add({ name, email })

    const user = userRepo.findUserByEmail(email)
    expect((await user).name).toBe(name)
  })
})
