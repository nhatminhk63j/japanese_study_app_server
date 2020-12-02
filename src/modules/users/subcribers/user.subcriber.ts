
import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config'
import { User } from '../../../db/entities/user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  private readonly bcryptSalt: number

  constructor(connection: Connection, private readonly configService: ConfigService) {
    connection.subscribers.push(this)
    this.bcryptSalt = 12;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  listenTo() {
    return User
  }

  async beforeInsert(event: InsertEvent<User>): Promise<void> {
    const { password } = event.entity
    event.entity.password = await bcrypt.hash(password, this.bcryptSalt)
  }
}