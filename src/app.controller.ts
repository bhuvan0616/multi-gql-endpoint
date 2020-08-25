import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RateLimit } from 'nestjs-rate-limiter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @RateLimit({ points: 1, duration: 60 })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @RateLimit({ points: 5, duration: 60 })
  @Get('extended')
  getExtended() {
    return this.appService.getHello();
  }
}
