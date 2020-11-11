import { Injectable } from '@nestjs/common';
import { BaseService } from '../../utils/baseServiceUtil';
import { ListeningEntity } from '../../db/entities/listening.entity';
import { ListeningRepo } from './listening.repo';
import { LoggerService } from '../loggers/logger.service';
import { ListeningCreate } from '../../dto/listening.dto';
import { LessonService } from '../lessons/lesson.service';
import { QuestionService } from '../questions/question.service';
import { AnswerService } from '../answers/answer.service';
import { ConventionService } from '../conventions/convention.service';

@Injectable()
export class ListeningService extends BaseService<
  ListeningEntity,
  ListeningRepo
> {
  constructor(
    repository: ListeningRepo,
    logger: LoggerService,
    private readonly lessonService: LessonService,
    private readonly questionService: QuestionService,
    private readonly answerService: AnswerService,
    private readonly conventionService: ConventionService,
  ) {
    super(repository, logger);
  }

  async bulkCreate(lessonId: number, listenings: ListeningCreate[]) {
    const categoryId = await this.lessonService.getCategoryId(lessonId);

    for (const listening of listenings) {
      // save listening.
      const listeningCreate = await this.store({
        picture: listening.picture,
        audio: listening.audio,
        lessonId: lessonId,
      });

      await this.conventionService.store(
        listening.conventions.map(convention => {
          return {
            ...convention,
            listeningId: listeningCreate.id,
          };
        }),
      );

      for (const questionAndAnswer of listening.questionAndAnswers) {
        const question = questionAndAnswer.question;
        const answers = questionAndAnswer.answers;
        // save question.
        const questionCreate = await this.questionService.store({
          content: question.content,
          relationId: listeningCreate.id,
          categoryId: categoryId,
          score: question.score,
          order: question.order,
        });

        // save answers.
        await this.answerService.store(
          answers.map(answer => {
            return {
              ...answer,
              questionId: questionCreate.id,
            };
          }),
        );
      }
    }
    return Promise.resolve('Success');
  }
}
