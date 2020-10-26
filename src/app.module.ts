import { DatabaseModule } from './modules/database/database.module';
import { UserHttpModule } from './modules/users/http-user.module';
import { ValidatorModule } from './modules/validators/validator.module';
import { AllExceptionFilter } from './filters/exception.filter';
import { LoggerModule } from './modules/loggers/logger.module';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import databaseConfig from './configs/database.config';
import authConfig from './configs/auth.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig],
    }),
    LoggerModule,
    ValidatorModule,
    DatabaseModule,
    UserHttpModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule {}
