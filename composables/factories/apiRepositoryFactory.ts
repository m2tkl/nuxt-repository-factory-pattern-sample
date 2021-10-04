import { UserRepository } from "../repositories/userRepository";
import { BooksRepository } from "../repositories/booksRepository";

export interface Repositories {
  user: typeof UserRepository
  books: typeof BooksRepository
}

const repositories: Repositories = {
  user: UserRepository,
  books: BooksRepository
}

export const apiRepositoryFactory = {
  get: (key: keyof Repositories) => repositories[key]
}
