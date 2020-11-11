import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('conventions')
export class ConventionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  people: string;

  @Column()
  content: string;

  @Column()
  order: number;

  @Column({ name: 'listening_id' })
  listeningId: number;
}
