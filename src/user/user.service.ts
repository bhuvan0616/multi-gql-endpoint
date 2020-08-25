import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UserService {
  getUser(): UserDto {
    return {
      name: 'bhuvnesh',
      age: 27,
    };
  }
}
