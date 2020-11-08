import { Controller, Get, Param } from '@nestjs/common';
import { VocabularyService } from './vocabulary.service';
import { ApiTags } from '@nestjs/swagger';
import { VocabularyDto } from '../../dto/vocabulary.dto';
import { plainToClass } from 'class-transformer';
import { EntityId } from 'typeorm/repository/EntityId';

@ApiTags('Vocabulary')
@Controller('vocabularies')
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabularyService) {}

  @Get('/lesson/:lessonId')
  async getByLessonId(
    @Param('lessonId') lessonId: string,
  ): Promise<VocabularyDto[]> {
    const vocabularies = await this.vocabularyService.getByLessonId(
      parseInt(lessonId),
    );
    return plainToClass(VocabularyDto, vocabularies);
  }
}
