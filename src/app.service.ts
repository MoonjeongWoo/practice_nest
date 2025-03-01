import { Injectable } from '@nestjs/common';

// 실제 데이터 처리는 서비스 담당.
// express 에서의 미들 웨어 역할.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
