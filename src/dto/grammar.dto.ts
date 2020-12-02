import { IsNotEmpty } from 'class-validator';
import { Exclude, Type } from 'class-transformer';

export class GrammarDto {
  id: number;

  form: string;

  use: string;

  explanation: string;

  @Type(() => Example) examples: Example[]
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

export class GrammarCreateDto {
  form: string;

  use: string;

  explanation: string;

  examples: Example[];
}

export class BulkCreateGrammar {
  @IsNotEmpty()
  lessonId: number;

  @IsNotEmpty()
  grammars: GrammarCreateDto[];
}