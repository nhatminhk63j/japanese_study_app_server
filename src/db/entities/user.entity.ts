import { BaseEntity } from './base.entity';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({name: 'users'})
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'first_name' })
  firstName: string

  @Column({ name: 'last_name' })
  lastName: string

  @Unique(['email'])
  @Column()
  email: string

  @Column()
  password: string

  @Column({ name: 'avatar_url' })
  avatarUrl: string

  @Column({ name: 'is_active' })
  isActive: boolean
}