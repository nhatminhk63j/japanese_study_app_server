import { Exclude, Expose, Type } from 'class-transformer';
import { QuestionCreateDto, QuestionDto } from './question.dto';
import { AnswerCreateDto, AnswerDto } from './answer.dto';
import { ConventionCreateDto, ConventionDto } from './convention.dto';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class ListeningDto {
  @Expose()
  picture: string;

  @Expose()
  audio: string;

  @Expose()
  @Type(() => ConventionDto)
  conventions: ConventionDto[];

  @Expose()
  @Type(() => Question)
  questions: Question[];
}

class Question extends QuestionDto {
  @Expose()
  @Type(() => AnswerDto)
  answers: AnswerDto[];
}

export class ListeningCreate {
  picture: string;

  audio: string;

  conventions: ConventionCreateDto[];

  questionAndAnswers: QuestionAndAnswersCreate[];
}

class QuestionAndAnswersCreate {
  question: QuestionCreateDto;
  answers: AnswerCreateDto[];
}

export class ListeningBulkCreate {
  @IsNotEmpty()
  lessonId: number;
  @IsNotEmpty()
  listenings: ListeningCreate[];
}
