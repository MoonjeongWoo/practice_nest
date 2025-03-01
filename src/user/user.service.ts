import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = ['kim', 'choi', 'park'];

  getUsers(): string[] {
    return this.users;
  }

  addUser(name: string): string {
    this.users.push(name);
    return `${name} 유저가 추가되었습니다.`;
  }

  updateUser(name: string, newName: string): string {
    const index = this.users.indexOf(name);
    if (index !== -1) {
      this.users[index] = newName;
    }
    return `${name} 유저가 수정되었습니다.`;
  }

  deleteUser(name: string): string {
    const index = this.users.indexOf(name);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    return `${name} 유저가 삭제되었습니다.`;
  }
}
