import { Query, Resolver } from '@nestjs/graphql';
import { CaptainService } from './captain.service';
import { CaptainDto } from '../dto/Captain.dto';

@Resolver()
export class CaptainResolver {
  constructor(private readonly userService: CaptainService) {}
  @Query(() => CaptainDto)
  getCaptain(): CaptainDto {
    return this.userService.getUser();
  }
}
