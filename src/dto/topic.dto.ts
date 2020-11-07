import { Exclude, Expose } from 'class-transformer';
import { Level } from '../db/entities/topic.entity';

@Expose()
export class TopicDto {
  id: number;

  title: string;

  description: string;

  level: Level;

  categoryId: number;
}

export class LessonUpdate {
  title: string;

  description: string;

  level: Level;

  categoryId: number;
}
