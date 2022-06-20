import { UserRepository } from '../ports/user-repository'
import { UserData } from '../user-data'

export class InMemoryUserRepository implements UserRepository {
  private repository: UserData[] = []

  constructor (repository: UserData[]) {
    this.repository = repository
  }

  findUserByEmail (_email: string): Promise<UserData | null> {
    return this.repository.find((u) => u.email === _email) || null as any
  }

  async add (_user: UserData): Promise<void> {
    const exists = this.exists(_user)
    if (!exists) {
      this.repository.push(_user)
    }
  }

  async findAllUsers (): Promise<UserData[]> {
    return this.repository
  }

  async exists (_user: UserData): Promise<boolean> {
    return await this.findUserByEmail(_user.email) !== null
  }
}
