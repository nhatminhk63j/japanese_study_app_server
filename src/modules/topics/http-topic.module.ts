import { Module } from '@nestjs/common';
import { LoggerService } from '../loggers/logger.service';
import { TopicModule } from './topic.module';
import { TopicService } from './topic.service';
import { TopicController } from './topic.controller';

@Module({
  imports: [TopicModule, LoggerService],
  providers: [TopicService],
  exports: [TopicService],
  controllers: [TopicController]
})
export class HttpTopicModule {}