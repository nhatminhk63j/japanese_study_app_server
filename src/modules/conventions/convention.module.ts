import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConventionRepo } from './convention.repo';

@Module({
  imports: [TypeOrmModule.forFeature([ConventionRepo])],
  exports: [TypeOrmModule],
})
export class ConventionModule {}
