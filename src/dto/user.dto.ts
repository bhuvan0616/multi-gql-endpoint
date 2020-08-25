import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('user')
export class UserDto {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}
