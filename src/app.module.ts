import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ConfigModule from './modules/configs/config.module';
import ConfigService from './modules/configs/config.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      new ConfigService(`env/${process.env.NODE_ENV || 'development'}.env`).getTypeORMConfig()
    ),
    ConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
