import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Adherent as AdherentSql} from './schema/mysql/adherent.schema';
import { Adherent, AdherentSchema } from './schema/mongodb/adherent.schema';

import sequelize from 'sequelize';
import { Affilie as AffilieSql } from './schema/mysql/affilie.schema';
import { SyncroService } from 'src/syncro.service';
import { MappingService } from 'src/mapping.service';

import { Affilie as AffilieMongo, AffilieSchema } from './schema/mongodb/affilie.schema';
import { UtilService } from 'src/util.service';
import { SyncServicesModule } from 'src/sync-services/sync-services.module';
import { ConfigModule } from '@nestjs/config';
import { AdherentController } from './controllers/adherent/adherent.controller';
import { AdherentService } from './service/adherent/adherent.service';
import { DbOstieController } from './db_ostie.controller';
import { DbOstieService } from './db_ostie.service';
import { AffilieController } from './controllers/affilie/affilie.controller';
import { AffilieService } from './service/affilie/affilie.service';


@Module({
    imports:[
      ConfigModule.forRoot(),
      SyncServicesModule,
        MongooseModule.forRoot(process.env.MONGODB_URL+'db_ostie',{connectionName:'db_ostie'}),
        MongooseModule.forFeature([{name:Adherent.name,schema:AdherentSchema},{name:AffilieMongo.name,schema:AffilieSchema}],'db_ostie'),
        SequelizeModule.forRoot({
          name:'db_ostie',
          dialect: 'mysql', 
          host: process.env.MYSQL_HOST,
          port: parseInt(process.env.MYSQL_PORT),
          username: process.env.MYSQL_USERNAME,
          password: process.env.MYSQL_PASSWORD,
          database: 'db_ostie',
          models: [AdherentSql,AffilieSql], // Vous pouvez ajuster cette option en fonction de vos besoins
           }),],
        
      controllers: [ AdherentController, DbOstieController, AffilieController],
      
      providers: [
        UtilService,
        MappingService,
        SyncroService,
        {
          provide: 'db_ostie',
          useValue: sequelize, // Your Sequelize instance
        },
        {
        provide: 'SEQUELIZE',
        useValue: sequelize, // Your Sequelize instance
        },{
        provide: 'AdherentSql',
        useValue: AdherentSql // Your Sequelize model
      },
      {
        provide: 'AffilieSql',
        useValue: AffilieSql // Your Sequelize model
      },
      AdherentService,
      DbOstieService,
      AffilieService],
      exports:[ UtilService,
        MappingService,
        SyncroService,
        {
          provide: 'db_ostie',
          useValue: sequelize, // Your Sequelize instance
        },
        {
        provide: 'SEQUELIZE',
        useValue: sequelize, // Your Sequelize instance
        },{
        provide: 'AdherentSql',
        useValue: AdherentSql // Your Sequelize model
      },
      {
        provide: 'AffilieSql',
        useValue: AffilieSql // Your Sequelize model
      },
      AdherentService,
      DbOstieService,
      AffilieService],
})
export class DbOstieModule {
    
}
