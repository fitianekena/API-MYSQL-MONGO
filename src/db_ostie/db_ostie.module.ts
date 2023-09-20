import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Adherent as AdherentSql} from './schema/mysql/adherent.schema';
import { Adherent, AdherentSchema } from './schema/mongodb/adherent.schema';
import SyncDbOstieService from './service/sync_db_ostie/sync_db_ostie.service';
import sequelize from 'sequelize';
import { Affilie as AffilieSql } from './schema/mysql/affilie.schema';
import { SyncroService } from 'src/syncro.service';
import { MappingService } from 'src/mapping.service';
import { SyncDbOstieController } from './controllers/sync_db_ostie/sync_db_ostie.controller';
import { Affilie as AffilieMongo, AffilieSchema } from './schema/mongodb/affilie.schema';
import { UtilService } from 'src/util.service';
@Module({
    imports:[
        
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/db_ostie',{connectionName:'db_ostie'}),
        MongooseModule.forFeature([{name:Adherent.name,schema:AdherentSchema},{name:AffilieMongo.name,schema:AffilieSchema}],'db_ostie'),
        SequelizeModule.forRoot({
          dialect: 'mysql', 
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'db_ostie',
          models: [AdherentSql,AffilieSql], // Vous pouvez ajuster cette option en fonction de vos besoins
           }),],
        
      controllers: [SyncDbOstieController],
      providers: [
        UtilService,
        MappingService,
        SyncDbOstieService,
        SyncroService,
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
      }],
})
export class DbOstieModule {
    
}
