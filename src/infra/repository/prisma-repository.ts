import type { PrismaClient } from "@prisma/client";

export class PrismaRepository {
  constructor(private db: PrismaClient) { }

  async create(user: any): Promise<any> {
    return this.db.user.create({ data: user });
  }

  async findByEmail(email: string): Promise<any | null> {
    return this.db.user.findUnique({ where: { email } });
  }

  async findAll(): Promise<any[]> {
    return this.db.user.findMany();
  }

  async update(user: any): Promise<any> {
    return this.db.user.update({ where: { id: user.id }, data: user });
  }

  async delete(email: string): Promise<void> {
    await this.db.user.delete({ where: { email } });
  }
}