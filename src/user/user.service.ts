import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async addUser(name: string): Promise<string> {
    await this.userRepository.save({ name });
    return `${name} 유저가 추가되었습니다.`;
  }

  async updateUser(name: string, newName: string): Promise<string> {
    await this.userRepository.update(name, { name: newName });
    return `${name} 유저가 수정되었습니다.`;
  }

  async deleteUser(name: string): Promise<string> {
    await this.userRepository.delete(name);
    return `${name} 유저가 삭제되었습니다.`;
  }
}
