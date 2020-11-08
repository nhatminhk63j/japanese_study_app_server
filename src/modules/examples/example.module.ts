import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleRepo } from './example.repo';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleRepo])],
  exports: [TypeOrmModule],
})
export class ExampleModule {}
