import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepo } from './question.repo';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionRepo])],
  exports: [TypeOrmModule],
})
export class QuestionModule {}
