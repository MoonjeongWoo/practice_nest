import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //유저 목록 조회
  @Get()
  getUsers(): string[] {
    return this.userService.getUsers();
  }

  //유저 생성
  @Post()
  addUser(@Body() body: { name: string }): string {
    return this.userService.addUser(body.name);
  }

  @Put(':name')
  updateUser(
    @Param('name') name: string,
    @Body() body: { newName: string },
  ): string {
    return this.userService.updateUser(name, body.newName);
  }

  @Delete(':name')
  deleteUser(@Param('name') name: string): string {
    return this.userService.deleteUser(name);
  }
}
