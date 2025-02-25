// root module

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'dbConfig';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  // PropertyModule,TypeOrmModule.forRoot(pgConfig)
  imports: [PropertyModule,TypeOrmModule.forRoot(pgConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
