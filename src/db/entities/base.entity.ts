import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
  @CreateDateColumn({
    name: 'created_at',
    default: `now()`,
    nullable: true,
  })
  createdAt: string

  @UpdateDateColumn({
    name: 'updated_at',
    default: `now()`,
    nullable: true,
  })
  updatedAt: string
}