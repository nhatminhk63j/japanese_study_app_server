import { User } from './../../db/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { Topic } from '../../db/entities/topic.entity';
import { Lesson } from '../../db/entities/lesson.entity';
import { Vocabulary } from '../../db/entities/vocabulary.entity';
import { ExampleEntity } from '../../db/entities/example.entity';
import { ListeningEntity } from '../../db/entities/listening.entity';
import { QuestionEntity } from '../../db/entities/question.entity';
import { AnswerEntity } from '../../db/entities/answer.entity';
import { ConventionEntity } from '../../db/entities/convention.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        ({
          port: parseInt(process.env.MYSQL_PORT),
          type: 'mysql',
          host: process.env.MYSQL_HOST,
          username: process.env.MYSQL_USER,
          password: process.env.MYSQL_PASSWORD,
          database: process.env.MYSQL_DATABASE,
          entities: [
            User,
            Topic,
            Lesson,
            Vocabulary,
            ExampleEntity,
            ListeningEntity,
            QuestionEntity,
            AnswerEntity,
            ConventionEntity,
          ],
        } as MysqlConnectionOptions),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
