// http endpoints

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';

dotenv.config();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private configService:ConfigService) {}

  @Get()
  getHello(): any {
    return this.configService.get('dbconfig.dev.type') ? this.configService.get('dbconfig.dev.type') : 'could not get env info' ;
  }
  
  
}
