import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TopicService } from './topic.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { EntityId } from 'typeorm/repository/EntityId';
import { plainToClass } from 'class-transformer';
import { TopicDto } from '../../dto/topic.dto';
import { InsertResult } from 'typeorm';

@ApiTags('Topic')
@Controller('topics')
export class TopicController {
  constructor(private readonly topicService: TopicService) {
  }

  @Get('/:categoryId/:level')
  @ApiOperation({ summary: 'Get Topic by category id and level'})
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async getTopicByCategoryAndLevel(@Param('categoryId') categoryId: EntityId, @Param('level') level: string): Promise<TopicDto[]> {
    const topics = await this.topicService.getTopicByCategoryAndLevel(categoryId, level)
    return plainToClass(TopicDto, topics);
  }

  @Post('/create')
  @ApiOperation({summary: 'Create topic with category and level'})
  async createTopicByCategoryAndLevel(@Body() topic: any): Promise<TopicDto> {
    const topicCreate = await this.topicService.store(topic)
    return plainToClass(TopicDto, topicCreate)
  }

  @Post('/create/bulk')
  @ApiOperation({summary: 'Bulk create topics with category and level'})
  async bulkCreateTopicByCategoryAndLevel(@Body() topic: TopicDto[]): Promise<InsertResult> {
    return this.topicService.bulkCreate(topic);
  }
}