import { BaseEntity } from './base.entity';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  EDITOR = 'editor',
  USER = 'user',
}

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Unique(['email'])
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ name: 'avatar_url' })
  avatarUrl: string;

  @Column({ name: 'is_active' })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;
}
