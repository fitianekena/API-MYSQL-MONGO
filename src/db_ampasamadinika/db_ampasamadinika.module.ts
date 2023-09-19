import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Centre as CentreSql } from './schema/mysql/Centre.schema';
import { Centre, CentreSchema } from './schema/mongodb/centre.schema';
import { Personnel as PersonnelSql } from './schema/mysql/Personnel.schema';
import { Personnel, Personnel as PersonnelMongo, PersonnelSchema } from './schema/mongodb/personnel.schema';
import { Fonction as FonctionSql } from './schema/mysql/fonction.schema';
import { Fonction, Fonction as FonctionMongo, FonctionSchema } from './schema/mongodb/fonction.schema';
import { Visiteaffilie as VisiteaffilieSql } from './schema/mysql/visiteaffilie.schema';
import { Visiteaffilie as VisiteaffilieMongo, VisiteaffilieSchema } from './schema/mongodb/visiteaffilie.schema';
import { SyncDbAmpasamadinikaService } from './service/sync_db_ampasamadinika/sync_db_ampasamadinika.service';
import sequelize from 'sequelize';

import { SyncroService } from 'src/syncro.service';
import { MappingService } from 'src/mapping.service';
import { SyncDbAmpasamadinikaController } from './controllers/sync_db_ampasamadinika/db_ampasamadinika.controller';
import { Mongoose } from 'mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/db_ampasamadinika',{connectionName:'db_ampasamadinika_mongo'}),
    SequelizeModule.forRoot({
    name:'db_ampasamadinika_sql',
    dialect: 'mysql', 
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'db_ampasamadinika',
    models:[CentreSql, FonctionSql, PersonnelSql, VisiteaffilieSql]
      }),
    MongooseModule.forFeature([
      {name:Centre.name,schema:CentreSchema},
      {name:FonctionMongo.name,schema:FonctionSchema},
      {name:PersonnelMongo.name,schema:PersonnelSchema},
      {name:VisiteaffilieMongo.name,schema:VisiteaffilieSchema}
    ], 'db_ampasamadinika_mongo'),
    SequelizeModule.forFeature([CentreSql, FonctionSql, PersonnelSql, VisiteaffilieSql], 'db_ampasamadinika_sql')],

  controllers: [SyncDbAmpasamadinikaController],
  providers: [
    MappingService,
    SyncDbAmpasamadinikaService,
    SyncroService,
    {
      provide: 'SEQUELIZE',
      useValue: sequelize, // Your Sequelize instance
    }, {
      provide: 'CentreSql',
      useValue: CentreSql, // Your Sequelize instance
    },
    {
      provide: 'FonctionSql',
      useValue: FonctionSql, // Your Sequelize instance
    },
    {
      provide: 'PersonnelSql',
      useValue: PersonnelSql, // Your Sequelize instance
    },
    {
      provide: 'VisiteaffilieSql',
      useValue: VisiteaffilieSql, // Your Sequelize instance
    },
    {
      provide: 'Mongo',
      useValue: Mongoose, // Your Sequelize instance
    },
    // {
    //   provide: 'Fonction',
    //   useValue: FonctionMongo, // Your Sequelize instance
    // },
    // {
    //   provide: 'Personnel',
    //   useValue: PersonnelMongo, // Your Sequelize instance
    // },
  ],
})
export class DbAmpasamadinikaModule {

}
