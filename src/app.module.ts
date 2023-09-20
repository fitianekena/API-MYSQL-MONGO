import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';

import { DbOstieModule } from './db_ostie/db_ostie.module';


import { DbAmpasamadinikaModule } from './db_ampasamadinika/db_ampasamadinika.module';
import { UtilService } from './util.service';
import { MappingService } from './mapping.service';
import { SyncroService } from './syncro.service';
import { SyncServicesModule } from './sync-services/sync-services.module';
import { DbTanjombato } from './db_tanjombato/db_tanjombato.module';



@Module({
  imports:[
    DbOstieModule,
    DbAmpasamadinikaModule,
    SyncServicesModule,
    DbTanjombato
    ],
  
  controllers: [AppController],
  providers: [AppService,MappingService,SyncroService,UtilService],
})
export class AppModule { }
