import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//Controller: 사용자에게 요청을 받는 역할.
//express 에서의 라우터 역할.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
