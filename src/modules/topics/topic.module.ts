import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicRepo } from './topic.repo';

@Module({
  imports: [TypeOrmModule.forFeature([TopicRepo])],
  exports: [TypeOrmModule]
})
export class TopicModule {}