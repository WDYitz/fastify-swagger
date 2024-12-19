import { db } from "../database/db"
import { PrismaRepository } from "../repository/prisma-repository"
import { UserRepository } from "../repository/user-repository"

/*
* @function UserFactory
* @description This function returns an instance of UserRepository
* 
* @example
* const prismaRepository = PrismaRepository(db);
* @params db - database connection
* const userRepository = UserRepository(prismaRepository);
* @params prismaRepository - instance of PrismaRepository
* 
* @returns {UserRepository}
*/

export const UserFactory = () => {
  const prismaRepository = new PrismaRepository(db)
  const userRepository = new UserRepository(prismaRepository)

  return userRepository
}