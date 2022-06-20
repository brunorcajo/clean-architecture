import { UserRepository } from '../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private repository: UserData[] = []

  constructor (repository: UserData[]) {
    this.repository = repository
  }

  findUserByEmail (_email: string): Promise<UserData | null> {
    return this.repository.find((u) => u.email === _email) || null
  }

  async add (_user: UserData): Promise<void> {
    const exists = this.exists(_user)
    if (!exists) {
      this.repository.push(_user)
    }
  }

  findAllUsers (): Promise<UserData[]> {
    throw new Error('Method not implemented.')
  }

  async exists (_user: UserData): Promise<boolean> {
    return await this.findUserByEmail(_user.email) !== null
  }
}
