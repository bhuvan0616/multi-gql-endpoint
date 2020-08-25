import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RateLimiterInterceptor, RateLimiterModule } from 'nestjs-rate-limiter';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { CaptainModule } from './captain/captain.module';

@Module({
  imports: [
    RateLimiterModule,
    UserModule,
    CaptainModule,
    GraphQLModule.forRootAsync({
      useFactory: async () => ({
        autoSchemaFile: 'src/user/user-schema.gql',
        path: 'user',
        playground: true,
        include: [UserModule],
      }),
    }),
    GraphQLModule.forRootAsync({
      useFactory: async () => ({
        autoSchemaFile: 'src/captain/captain-schema.gql',
        path: 'captain',
        playground: true,
        include: [CaptainModule],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: RateLimiterInterceptor,
    },
  ],
})
export class AppModule {}
