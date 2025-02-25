// root module

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { ProertyService } from './proerty/proerty.service';

@Module({
  imports: [PropertyModule],
  controllers: [AppController],
  providers: [AppService, ProertyService],
})
export class AppModule {}
