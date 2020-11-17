import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('grammars')
export class GrammarEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  form: string;

  @Column()
  use: string;

  @Column()
  explanation: string;

  @Column({ name: 'lesson_id' })
  lessonId: string;
}
