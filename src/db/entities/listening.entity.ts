import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('listenings')
export class ListeningEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  picture: string;

  @Column()
  audio: string;

  @Column({ name: 'lesson_id' })
  lessonId: string;
}
