export interface IUserRepository {
  create(user: any): Promise<any>;
  findByEmail(id: string): Promise<any | null>;
  findAll(): Promise<any[]>;
  update(any: any): Promise<any>;
  delete(id: string): Promise<void>;
}