import { User } from './../../db/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

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
          entities: [User],
        } as MysqlConnectionOptions),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
