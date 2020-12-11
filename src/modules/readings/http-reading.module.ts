import { Module } from '@nestjs/common';
import { ReadingController } from './reading.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [ReadingController]
})
export class HttpReadingModule {
  
}