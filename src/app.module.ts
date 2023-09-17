import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';

import { DbOstieModule } from './db_ostie/db_ostie.module';
import { OstieModule } from './ostie/ostie.module';

@Module({
  imports:[
     DbOstieModule,
     OstieModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
