import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrammarRepo } from './grammar.repo';

@Module({
  imports: [TypeOrmModule.forFeature([GrammarRepo])],
  exports: [TypeOrmModule],
})
export class GrammarModule {}
