import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
//Service: 여기에서는 비즈니스 로직을 처리하는 역할을 한다.
//ex)유저 추가, 수정, 삭제 등의 로직을 처리한다.
//Controller에서 요청을 받아 비즈니스 로직을 처리한다.
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  //유저 목록 조회
  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  //유저 추가
  async addUser(name: string): Promise<string> {
    await this.userRepository.save({ name });
    return `${name} 유저가 추가되었습니다.`;
  }

  //유저 수정
  async updateUser(name: string, newName: string): Promise<string> {
    await this.userRepository.update(name, { name: newName });
    return `${name} 유저가 수정되었습니다.`;
  }

  async deleteUser(name: string): Promise<string> {
    await this.userRepository.delete(name);
    return `${name} 유저가 삭제되었습니다.`;
  }
}
