import { Exclude, Expose, Type } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

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

export class VocabularyCreate {
  kanji: string;
  hiragana: string;
  vietnamese: string;
  audio: string;
  examples: Example[];
}

export class BulkCreateDto {
  @IsNotEmpty()
  lessonId: number;

  @IsNotEmpty()
  vocabularies: VocabularyCreate[];
}
