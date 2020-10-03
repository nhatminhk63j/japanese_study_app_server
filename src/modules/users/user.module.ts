import { UserSubscriber } from './user.subscriber';
import { UserRepository } from './user.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserSubscriber],
  exports: [TypeOrmModule],
})
export class UsersModule {}
