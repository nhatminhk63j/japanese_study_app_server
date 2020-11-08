import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ExampleEntity } from './example.entity';

@Entity('vocabularies')
export class Vocabulary extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  kanji: string;

  @Column()
  hiragana: string;

  @Column()
  vietnamese: string;

  @Column()
  audio: string;

  @Column({ name: 'lesson_id' })
  lessonId: number;
}
