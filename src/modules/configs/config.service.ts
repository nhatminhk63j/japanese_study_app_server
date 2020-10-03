import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';
import IEnvConfig from '../../interfaces/config.interface';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
class ConfigService {
  private readonly envConfig: IEnvConfig;

  constructor(filePath: string) {
    const config = dotenv.parse(fs.readFileSync(filePath));
    this.envConfig = config;
  };

  public getTypeORMConfig(): TypeOrmModuleOptions {
    const baseDir = path.join(__dirname, '../../');
    const entitiesPath = `${baseDir}${this.envConfig.TYPEORM_ENTITIES}`;
    const migrationPath = `${baseDir}${this.envConfig.TYPEORM_MIGRATIONS}`;
    const type = 'mysql';
    return {
      type,
      host: this.envConfig.MYSQL_HOST,
      username: this.envConfig.MYSQL_USER,
      password: this.envConfig.MYSQL_PASSWORD,
      database: this.envConfig.MYSQL_DATABASE,
      port: Number.parseInt(this.envConfig.MYSQL_PORT, 10),
      logging: false,
      entities: [entitiesPath],
      migrations: [migrationPath],
      migrationsRun: this.envConfig.TYPEORM_MIGRATIONS_RUN === 'true',
      cli: {
        migrationsDir: 'src/db/migrations',
        entitiesDir: 'src/db/entities',
      }
    }
  }
}

export default ConfigService;