import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Centre as CentreSql} from './schema/mysql/Centre.schema';
import { Centre, CentreSchema } from './schema/mongodb/centre.schema';
import { Personnel as PersonnelSql} from './schema/mysql/Personnel.schema';
import { Personnel as PersonnelMongo, PersonnelSchema } from './schema/mongodb/personnel.schema';
import {  SyncDbAmpasamadinikaService } from './service/sync_db_ampasamadinika/sync_db_ampasamadinika.service';
import sequelize from 'sequelize';

import { SyncroService } from 'src/syncro.service';
import { MappingService } from 'src/mapping.service';
import { SyncDbAmpasamadinikaController } from './controllers/sync_db_ampasamadinika/db_ampasamadinika.controller';
@Module({
    imports:[
        
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/db_ostie'),
        SequelizeModule.forRoot({
        dialect: 'mysql', 
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'db_ostie',
        models: [CentreSql, PersonnelSql], // Vous pouvez ajuster cette option en fonction de vos besoins
         }),
        MongooseModule.forFeature([{name:Centre.name,schema:CentreSchema}, {name:PersonnelMongo.name,schema:PersonnelSchema}])],
      
      controllers: [SyncDbAmpasamadinikaController],
      providers: [
        MappingService,
        SyncDbAmpasamadinikaService,
        SyncroService,
        {
        provide: 'SEQUELIZE',
        useValue: sequelize, // Your Sequelize instance
        },{
        provide: 'CentreSql',
        useValue: CentreSql // Your Sequelize model
      },
      {
        provide: 'PersonnelSql',
        useValue: PersonnelSql // Your Sequelize model
      }],
})
export class DbAmpasamadinikaModule {

}
