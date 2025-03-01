import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = ['kim', 'choi', 'park'];

  getUsers(): string[] {
    console.log('getUsers : ', this.users);
    return this.users;
  }
}
