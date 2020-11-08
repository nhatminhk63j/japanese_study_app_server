import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { Vocabulary } from '../../db/entities/vocabulary.entity';
import { VocabularyRepo } from './vocabulary.repo';
import { LoggerService } from '../loggers/logger.service';
import { EntityId } from 'typeorm/repository/EntityId';
import { VocabularyCreate } from '../../dto/vocabulary.dto';
import { ExampleService } from '../examples/example.service';
import { LessonService } from '../lessons/lesson.service';

@Injectable()
export class VocabularyService extends BaseService<Vocabulary, VocabularyRepo> {
  constructor(
    repository: VocabularyRepo,
    logger: LoggerService,
    private readonly exampleService: ExampleService,
    private readonly lessonService: LessonService,
  ) {
    super(repository, logger);
  }

  async getByLessonId(lessonId: EntityId): Promise<Vocabulary[]> {
    return this.repository.getByLessonId(lessonId);
  }

  async bulkCreateByLessonId(
    lessonId: number,
    vocabularies: VocabularyCreate[],
  ): Promise<any> {
    const categoryId = await this.lessonService.getCategoryId(lessonId);

    for (const vocabulary of vocabularies) {
      const vocabularyInDB = await this.repository.findOne({
        kanji: vocabulary.kanji,
        lessonId: lessonId,
      });

      const vocabularyData = {
        kanji: vocabulary.kanji,
        hiragana: vocabulary.hiragana,
        vietnamese: vocabulary.vietnamese,
        audio: vocabulary.audio,
        lessonId: lessonId,
      };

      if (vocabularyInDB) {
        await this.exampleService.deleteAllByRelationIdAndCategoryId(
          vocabularyInDB.id,
          categoryId,
        );
        await this.delete(vocabularyInDB.id);
      }
      const createVocal = await this.store(vocabularyData);

      await this.exampleService.store(
        vocabulary.examples.map(example => {
          return {
            ...example,
            relationId: createVocal.id,
            categoryId: categoryId,
          };
        }),
      );
    }
    return 'Success';
  }
}
