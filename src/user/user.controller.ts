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
import { User } from './user.entity';

//Controller: 여기에서는 유저 관련 요청을 처리하는 역할을 한다.
//ex)localhost:3000/user 요청이 들어오면 이 컨트롤러에서 처리한다.
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //유저 목록 조회
  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  //유저 생성
  @Post()
  addUser(@Body() body: { name: string }): Promise<string> {
    return this.userService.addUser(body.name);
  }

  @Put(':name')
  updateUser(
    @Param('name') name: string,
    @Body() body: { newName: string },
  ): Promise<string> {
    return this.userService.updateUser(name, body.newName);
  }

  @Delete(':name')
  deleteUser(@Param('name') name: string): Promise<string> {
    return this.userService.deleteUser(name);
  }
}
