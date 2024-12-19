import type { IUserRepository } from "../repository/interfaces/user-repository-interface";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute(user: any): Promise<any> {
    return this.userRepository.create(user);
  }
}

export class FindUserByEmail {
  constructor(private userRepository: IUserRepository) { }

  async execute(email: string): Promise<any | null> {
    return this.userRepository.findByEmail(email);
  }
}

export class FindAllUsers {
  constructor(private userRepository: IUserRepository) { }

  async execute(): Promise<any[]> {
    return this.userRepository.findAll();
  }
}

export class UpdateUser {
  constructor(private userRepository: IUserRepository) { }

  async execute(user: any): Promise<any> {
    return this.userRepository.update(user);
  }
}

export class DeleteUser {
  constructor(private userRepository: IUserRepository) { }

  async execute(email: string): Promise<void> {
    return this.userRepository.delete(email);
  }
}