import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { ApiTags } from '@nestjs/swagger';
import { BulkCreateDto, VocabularyDto } from '../../dto/vocabulary.dto';
import { plainToClass } from 'class-transformer';

@ApiTags('Vocabulary')
@Controller('vocabularies')
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabularyService) {}

  @Get('/lessons/:lessonId')
  async getByLessonId(
    @Param('lessonId') lessonId: string,
  ): Promise<VocabularyDto[]> {
    const vocabularies = await this.vocabularyService.getByLessonId(
      parseInt(lessonId),
    );
    return plainToClass(VocabularyDto, vocabularies);
  }

  @Post('/lessons')
  async bulkCreateByLessonId(@Body() request: BulkCreateDto): Promise<any> {
    return await this.vocabularyService.bulkCreateByLessonId(
      request.lessonId,
      request.vocabularies,
    );
  }
}
