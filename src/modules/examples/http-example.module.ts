import { Module } from '@nestjs/common';
import { ExampleService } from './example.service';
import { LoggerService } from '../loggers/logger.service';
import { ExampleModule } from './example.module';

@Module({
  imports: [ExampleModule, LoggerService],
  providers: [ExampleService],
  exports: [ExampleService],
})
export class HttpExampleModule {}
