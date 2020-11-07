import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vocabularies')
export class Vocabulary {
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
