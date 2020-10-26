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
          type: configService.get<string>('type'),
          host: configService.get<string>('host'),
          port: configService.get<number>('port'),
          username: configService.get<string>('username'),
          password: configService.get<string>('password'),
          database: configService.get<string>('database'),
          entities: [User],
        } as MysqlConnectionOptions),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
