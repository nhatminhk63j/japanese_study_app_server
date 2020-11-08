import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { type } from 'os';
import { Vocabulary } from './vocabulary.entity';

@Entity({ name: 'examples' })
export class ExampleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  meaning: string;

  @Column({ name: 'category_id' })
  categoryId: number;

  @Column({ name: 'relation_id' })
  relationId: number;
}
