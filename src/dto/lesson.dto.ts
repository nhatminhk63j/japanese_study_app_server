import { Exclude, Expose } from 'class-transformer';

@Expose()
export class LessonDto {
  id: number;

  title: string;

  description: string;

  @Exclude()
  topicId: number;
}

export class LessonUpdate {
  title: string;

  description: string;
}
