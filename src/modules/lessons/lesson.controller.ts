import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonDto, LessonUpdate } from '../../dto/lesson.dto';
import { plainToClass } from 'class-transformer';
import { EntityId } from 'typeorm/repository/EntityId';
import { DeleteResult } from 'typeorm';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  async index(): Promise<LessonDto[]> {
    const lessons = await this.lessonService.index();
    return plainToClass(LessonDto, lessons);
  }

  @Get(':id')
  async getById(@Param('id') id: EntityId): Promise<LessonDto> {
    const lesson = await this.lessonService.findById(id);
    return plainToClass(LessonDto, lesson);
  }

  @Post()
  async store(@Body() lesson: LessonDto): Promise<LessonDto> {
    const createLesson = this.lessonService.store(lesson);
    return plainToClass(LessonDto, createLesson);
  }

  @Put('/:id')
  async update(
    @Param('id') id: EntityId,
    @Body() lesson: LessonUpdate,
  ): Promise<LessonDto> {
    const updateLesson = this.lessonService.update(id, lesson);
    return plainToClass(LessonDto, updateLesson);
  }

  @Delete('/:id')
  async delete(@Param('id') id: EntityId): Promise<DeleteResult> {
    return this.lessonService.delete(id);
  }

  @Get('/topic/:topicId')
  async getByTopicId(
    @Param('topicId') topicId: EntityId,
  ): Promise<LessonDto[]> {
    const lessons = await this.lessonService.getByTopicId(topicId);
    return plainToClass(LessonDto, lessons);
  }
}
