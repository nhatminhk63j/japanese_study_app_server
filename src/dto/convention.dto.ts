import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ConventionDto {
  @Expose()
  id: number;
  @Expose()
  people: string;
  @Expose()
  content: string;
  @Expose()
  order: number;
}

export class ConventionCreateDto {
  people: string;
  content: string;
  order: number;
}
