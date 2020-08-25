import { Injectable } from '@nestjs/common';
import { CaptainDto } from '../dto/Captain.dto';

@Injectable()
export class CaptainService {
  getUser(): CaptainDto {
    return {
      name: 'bhuvnesh',
      age: 27,
    };
  }
}
