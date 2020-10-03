import { LoggerService } from './../loggers/logger.service';
import { UserRepository } from './user.repo';
import { BaseService } from './../../utils/baseServiceUtil';
import { User } from './../../db/entities/user.entity';
import { IBaseService } from './../../interfaces/base-service.interface';
import { Injectable } from '@nestjs/common';

interface IUserService extends IBaseService<User> {
  findByEmail(email: string): Promise<User | null>;
  getInactiveUsers(): Promise<User[]>;
}

@Injectable()
export class UserService extends BaseService<User, UserRepository>
  implements IUserService {
  constructor(repository: UserRepository, logger: LoggerService) {
    super(repository, logger);
  }

  findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email: email });
  }

  getInactiveUsers(): Promise<User[]> {
    return this.repository.getInactiveUsers();
  }
}
