import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('questions')
export class QuestionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ name: 'relation_id' })
  relationId: number;

  @Column()
  order: number;

  @Column()
  score: number;

  @Column({ name: 'category_id' })
  categoryId: number;
}
