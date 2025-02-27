// root module

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';

dotenv.config();

@Module({
  // PropertyModule,TypeOrmModule.forRoot(pgConfig)
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    expandVariables:true,
    load:[dbConfig]
  }),
  PropertyModule,TypeOrmModule.forRootAsync({
    useFactory:dbConfig
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
