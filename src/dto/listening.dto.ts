import { Type } from 'class-transformer';
import { QuestionCreateDto, QuestionDto } from './question.dto';
import { AnswerCreateDto, AnswerDto } from './answer.dto';
import { ConventionCreateDto, ConventionDto } from './convention.dto';
import { IsNotEmpty } from 'class-validator';

export class ListeningDto {
  picture: string;

  audio: string;

  @Type(() => ConventionDto) conventions: ConventionDto[];

  @Type(() => QuestionAndAnswers) questionAndAnswers: QuestionAndAnswers[];
}

class QuestionAndAnswers {
  @Type(() => QuestionDto) question: QuestionDto;

  @Type(() => AnswerDto) answers: AnswerDto[];
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
