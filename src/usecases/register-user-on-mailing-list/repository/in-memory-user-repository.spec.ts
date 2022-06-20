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
    const users: UserData[] = [{ name: 'any', email: 'any@email.com' }]
    const userRepo = new InMemoryUserRepository(users)

    const user = await userRepo.findUserByEmail('any@email.com')
    expect(user?.name).toBe('any')
  })

  it('should return all users in the repository', async () => {
    const users: UserData[] = [{ name: 'any_name', email: 'any@email.com' }, { name: 'second_name', email: 'second@email.com' }]
    const userRepo = new InMemoryUserRepository(users)

    const allUsers = await userRepo.findAllUsers()
    expect(allUsers.length).toBe(2)
  })
})
