import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';

import { DbOstieModule } from './db_ostie/db_ostie.module';

import { SyncDbAmpasamadinikaController } from './db_ampasamadinika/controllers/sync_db_ampasamadinika/db_ampasamadinika.controller';
import { SyncDbAmpasamadinikaService } from './db_ampasamadinika/service/sync_db_ampasamadinika/sync_db_ampasamadinika.service';
import { DbAmpasamadinikaModule } from './db_ampasamadinika/db_ampasamadinika.module';
import { UtilService } from './util.service';
import { MappingService } from './mapping.service';
import { SyncroService } from './syncro.service';
import { synchronizeToSequelize } from './sync-services/synchronizeToSequelize.service';
import { SynchronizeToMongoose } from './sync-services/synchronizeToMongoose.service';
import { SynchronizeModelsMongooseToSql } from './sync-services/synchronizeModelsMongooseToSql.service';
import { SynchronizeModelsSqlToMongoose } from './sync-services/synchronizeModelsSqlToMongoose.service';
import { UpdateDelete } from './sync-services/updatedelete.service';
import { Update } from './sync-services/update.service';
import { SyncServicesModule } from './sync-services/sync-services.module';



@Module({
  imports:[
    DbOstieModule,
    DbAmpasamadinikaModule,
    SyncServicesModule
    ],
  
  controllers: [AppController],
  providers: [AppService,MappingService,SyncroService,UtilService],
})
export class AppModule { }
