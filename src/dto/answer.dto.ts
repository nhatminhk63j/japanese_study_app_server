export class AnswerDto {
  id: number;
  content: number;
  order: number;
  questionId: number;
  isCorrect: boolean;
  createAt: string;
  updatedAt: string;
}

export class AnswerCreateDto {
  content: number;
  order: number;
  isCorrect: boolean;
}
