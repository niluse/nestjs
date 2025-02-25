// http endpoints

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

dotenv.config();

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("DATABASE_URL:", process.env.DATABASE_URL);

    return this.appService.getHello();
  }
  
  
}
