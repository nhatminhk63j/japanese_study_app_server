import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VocabularyRepo } from './vocabulary.repo';

@Module({
  imports: [TypeOrmModule.forFeature([VocabularyRepo])],
  exports: [TypeOrmModule],
})
export class VocabularyModule {}
