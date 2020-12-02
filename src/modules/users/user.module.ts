import { UserRepository } from './user.repo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserSubscriber } from './subcribers/user.subcriber';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  providers: [UserSubscriber],
  exports: [TypeOrmModule],
})
export class UsersModule {}
