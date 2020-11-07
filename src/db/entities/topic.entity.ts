import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum Level {
  N1 = 'n1',
  N2 = 'n2',
  N3 = 'n3',
  N4 = 'n4',
  N5 = 'n5',
}

@Entity('topics')
export class Topic extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Level,
    default: Level.N5,
  })
  level: Level;

  @Column({ name: 'category_id' })
  categoryId: number;
}
