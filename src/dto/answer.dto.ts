import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class AnswerDto {
  @Expose()
  id: number;
  @Expose()
  content: number;
  @Expose()
  order: number;

  questionId: number;
  @Expose()
  isCorrect: boolean;
  createAt: string;
  updatedAt: string;
}

export class AnswerCreateDto {
  content: number;
  order: number;
  isCorrect: boolean;
}
