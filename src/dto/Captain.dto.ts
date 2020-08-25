import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('captain')
export class CaptainDto {
  @Field()
  name: string;

  @Field(() => Int)
  age: number;
}
