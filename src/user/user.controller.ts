import { Controller, Get } from '@nestjs/common';
import { RateLimit } from 'nestjs-rate-limiter';
import { UserService } from './user.service';
import { UserDto } from '../dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }
  @RateLimit({ points: 1, duration: 60 })
  @Get()
  getUser(): UserDto {
    return this.userService.getUser();
  }
}
