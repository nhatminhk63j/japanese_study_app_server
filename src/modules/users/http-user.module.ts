import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerService } from './../loggers/logger.service';
import { UsersModule } from './user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule, LoggerService],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserHttpModule {}
