import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListeningRepo } from './listening.repo';

@Module({
  imports: [TypeOrmModule.forFeature([ListeningRepo])],
  exports: [TypeOrmModule],
})
export class ListeningModule {}
