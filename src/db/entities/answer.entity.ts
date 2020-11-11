import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('answers')
export class AnswerEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;

  @Column()
  order: number;

  @Column({ name: 'question_id' })
  questionId: number;

  @Column({ name: 'is_correct' })
  isCorrect: boolean;
}
