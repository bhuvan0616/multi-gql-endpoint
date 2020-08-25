import { Query, Resolver } from '@nestjs/graphql';
import { UserDto } from '../dto/user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => UserDto)
  getUser(): UserDto {
    return this.userService.getUser();
  }
}
