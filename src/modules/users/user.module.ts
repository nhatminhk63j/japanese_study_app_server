import { UserRepository } from './user.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  exports: [TypeOrmModule],
})
export class UsersModule {}
