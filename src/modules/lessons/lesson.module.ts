import { Module } from '@nestjs/common';
import { LessonRepo } from './lesson.repo';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LessonRepo])],
  exports: [TypeOrmModule],
})
export class LessonModule {}
