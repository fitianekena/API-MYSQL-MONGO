import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Centre as CentreSql} from './schema/mysql/Centre.schema';
import { Centre, CentreSchema } from './schema/mongodb/centre.schema';
import { Personnel as PersonnelSql} from './schema/mysql/Personnel.schema';
import { Personnel as PersonnelMongo, PersonnelSchema } from './schema/mongodb/personnel.schema';
import { Fonction as FonctionSql} from './schema/mysql/fonction.schema';
import { Fonction as FonctionMongo, FonctionSchema } from './schema/mongodb/fonction.schema';
import {  SyncDbAmpasamadinikaService } from './service/sync_db_ampasamadinika/sync_db_ampasamadinika.service';
import sequelize from 'sequelize';

import { SyncroService } from 'src/syncro.service';
import { MappingService } from 'src/mapping.service';
import { SyncDbAmpasamadinikaController } from './controllers/sync_db_ampasamadinika/db_ampasamadinika.controller';
import { UtilService } from 'src/util.service';
import { Visiteaffilie as VisiteaffilieSql } from './schema/mysql/visiteaffilie.schema';
import { Visiteaffilie as VisiteaffilieMongo, VisiteaffilieSchema } from './schema/mongodb/visiteaffilie.schema';
import { Service as ServiceSql } from './schema/mysql/service.schema';
import { Service as ServiceMongo, ServiceSchema } from './schema/mongodb/service.schema';
@Module({
    imports:[
        
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/db_ampasamadinika',{connectionName:'db_ampasamadinika'}),
        SequelizeModule.forRoot({
        dialect: 'mysql', 
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'db_ampasamadinika',
        models: [CentreSql, PersonnelSql, FonctionSql,VisiteaffilieSql, ServiceSql], // Vous pouvez ajuster cette option en fonction de vos besoins
         }),
        MongooseModule.forFeature([
          {name:Centre.name,schema:CentreSchema},
          {name:PersonnelMongo.name,schema:PersonnelSchema}, 
          {name:FonctionMongo.name,schema:FonctionSchema},
          {name:VisiteaffilieMongo.name,schema:VisiteaffilieSchema},
          {name:ServiceMongo.name,schema:ServiceSchema}
          
          ],'db_ampasamadinika')],
      
      controllers: [SyncDbAmpasamadinikaController],
      providers: [
        UtilService,
        MappingService,
        SyncDbAmpasamadinikaService,
        SyncroService,
        {
        provide: 'SEQUELIZE',
        useValue: sequelize, 
        },{
        provide: 'CentreSql',
        useValue: CentreSql 
      },
      {
        provide: 'PersonnelSql',
        useValue: PersonnelSql 
      },
      {
        provide: 'FonctionSql',
        useValue: FonctionSql 
      },
      {
        provide: 'VisiteaffilieSql',
        useValue: VisiteaffilieSql
      },
      {
        provide: 'ServiceSql',
        useValue: ServiceSql 
      },
    ],
      exports:[MongooseModule]
})
export class DbAmpasamadinikaModule {

}
