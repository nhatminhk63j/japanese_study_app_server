import { AllExceptionFilter } from './filters/exception.filter';
import { LoggerModule } from './modules/loggers/logger.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ConfigModule from './modules/configs/config.module';
import ConfigService from './modules/configs/config.service';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      new ConfigService(`env/${process.env.NODE_ENV || 'development'}.env`).getTypeORMConfig()
    ),
    ConfigModule,
    LoggerModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter
    },
  ],
})
export class AppModule {}
