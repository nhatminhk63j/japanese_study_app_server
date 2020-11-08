import { Exclude, Expose, Type } from 'class-transformer';

@Expose()
export class VocabularyDto {
  id: number;
  kanji: string;
  hiragana: string;
  vietnamese: string;
  audio: string;

  @Exclude()
  lessonId: string;

  @Exclude()
  createdAt: string;

  @Exclude()
  updatedAt: string;

  @Type(() => Example) examples: Example[];
}

class Example {
  id: number;
  content: string;
  meaning: string;

  @Exclude()
  relationId: number;
  @Exclude()
  categoryId: number;
}
