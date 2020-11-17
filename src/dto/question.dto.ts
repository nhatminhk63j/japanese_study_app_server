import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class QuestionDto {
  id: number;
  content: string;
  @Exclude()
  relationId: number;
  order: number;
  @Exclude()
  categoryId: number;
  score: number;
  @Exclude()
  createdAt: string;
  @Exclude()
  updatedAt: string;
}

export class QuestionCreateDto {
  content: string;
  order: number;
  score: number;
}
