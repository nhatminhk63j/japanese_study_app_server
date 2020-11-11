export class QuestionDto {
  id: number;
  content: string;
  relationId: number;
  order: number;
  categoryId: number;
  score: number;
  createdAt: string;
  updatedAt: string;
}

export class QuestionCreateDto {
  content: string;
  order: number;
  score: number;
}
