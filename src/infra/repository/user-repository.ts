import type { IUserRepository } from "./interfaces/user-repository-interface";
import type { PrismaRepository } from "./prisma-repository";

export class UserRepository implements IUserRepository {
  constructor(private db: PrismaRepository) { }

  async create(user: any): Promise<any> {
    return this.db.create(user);
  }

  async findByEmail(email: string): Promise<any | null> {
    return this.db.findByEmail(email);
  }

  async findAll(): Promise<any[]> {
    return this.db.findAll()
  }

  async update(user: any): Promise<any> {
    return this.db.update(user);
  }

  async delete(email: string): Promise<void> {
    return this.db.delete(email);
  }

}