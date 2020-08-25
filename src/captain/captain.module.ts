import { Module } from '@nestjs/common';
import { CaptainService } from './captain.service';
import { CaptainResolver } from './captain.resolver';

@Module({
  providers: [CaptainService, CaptainResolver],
})
export class CaptainModule {}
