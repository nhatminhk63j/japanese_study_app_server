import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerRepo } from './answer.repo';

@Module({
  imports: [TypeOrmModule.forFeature([AnswerRepo])],
  exports: [TypeOrmModule],
})
export class AnswerModule {}
