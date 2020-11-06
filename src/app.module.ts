import { RolesGuard } from './modules/auth/guards/role.guard';
import { DatabaseModule } from './modules/database/database.module';
import { UserHttpModule } from './modules/users/http-user.module';
import { ValidatorModule } from './modules/validators/validator.module';
import { AllExceptionFilter } from './filters/exception.filter';
import { LoggerModule } from './modules/loggers/logger.module';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import authConfig from './configs/auth.config';
import { VocabularyModule } from './vocabylaries/vocabulary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [authConfig],
    }),
    LoggerModule,
    ValidatorModule,
    DatabaseModule,
    UserHttpModule,
    AuthModule,
    VocabularyModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
