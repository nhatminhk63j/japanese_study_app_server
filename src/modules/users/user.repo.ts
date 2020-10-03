import { User } from './../../db/entities/user.entity';

import { EntityRepository, Repository } from 'typeorm';

interface IUserRepository {
  getInactiveUsers(): Promise<User[]>;
}

@EntityRepository(User)
export class UserRepository extends Repository<User>
  implements IUserRepository {
  getInactiveUsers(): Promise<User[]> {
    return this.createQueryBuilder()
      .where('isActive = :active', { active: false })
      .getMany();
  }
}
