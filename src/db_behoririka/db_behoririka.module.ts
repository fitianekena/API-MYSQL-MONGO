import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Centre as CentreSql } from './schema/mysql/centre.schema';
import { Centre, CentreSchema } from './schema/mongodb/centre.schema';
import { Personnel as PersonnelSql } from './schema/mysql/personnel.schema';
import { Personnel as PersonnelMongo, PersonnelSchema } from './schema/mongodb/personnel.schema';
import { Fonction as FonctionSql } from './schema/mysql/fonction.schema';
import { Fonction as FonctionMongo, FonctionSchema } from './schema/mongodb/fonction.schema';

import sequelize from 'sequelize';

import { SyncroService } from 'src/syncro.service';
import { MappingService } from 'src/mapping.service';

import { UtilService } from 'src/util.service';
import { Visiteaffilie as VisiteaffilieSql } from './schema/mysql/visiteaffilie.schema';
import { Visiteaffilie as VisiteaffilieMongo, VisiteaffilieSchema } from './schema/mongodb/visiteaffilie.schema';
import { Service as ServiceSql } from './schema/mysql/service.schema';
import { Service as ServiceMongo, ServiceSchema } from './schema/mongodb/service.schema';
import { SyncServicesModule } from 'src/sync-services/sync-services.module';
import { PersonnelService } from './service/personnel/personnel.service';
import { ServiceService } from './service/service/service.service';
import { FonctionService } from './service/fonction/fonction.service';

import { CentreService } from './service/centre/centre.service';
import { CentreController } from './controllers/centre/centre.controller';
import { FonctionController } from './controllers/fonction/fonction.controller';
import { PersonnelController } from './controllers/personnel/personnel.controller';
import { ServiceController } from './controllers/service/service.controller';
import { VisiteAffilieController } from './controllers/visiteaffilie/visiteaffilie.controller';
import { VisiteService } from './service/visite/visite.service';
import { DbBehoririkaService } from './db_behoririka.service';
import { DbBehoririkaController } from './db_behoririka.controller';
import { ConfigModule } from '@nestjs/config';
import { Affilie as AffilieSql } from './schema/mysql/affilie.schema';
import { Affilie as AffilieMongoDb, AffilieSchema } from './schema/mongodb/affilie.schema';
import { AffilieService } from './service/affilie/affilie.service';
import { AffilieController } from './controllers/affilie/affilie.controller';
import { Adherent as AdherentSql } from './schema/mysql/adherent.schema';
import { Adherent as AdherentMongo, AdherentSchema } from './schema/mongodb/adherent.schema';
import { AdherentController } from './controllers/adherent/adherent.controller';
import { AdherentService } from './service/adherent/adherent.service';
import { MedecinTravail as MedecinTravailSql } from './schema/mysql/medecintravail.schema';
import { MedecinTravail as MedecinTravailMongo, MedecinTravailSchema } from './schema/mongodb/medecintravail.schema';
import { MedecinTravailService } from './service/medecintravail/medecintravail.service';
import { MedecinTravailController } from './controllers/medecintravail/medecintravail.controller';
import { Ordonnance as OrdonnanceSql } from './schema/mysql/ordonnance.schema';
import { Ordonnance as OrdonnanceMongo, OrdonnanceSchema } from './schema/mongodb/ordonnance.schema';
import { OrdonnanceService } from './service/ordonnance/ordonnance.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    SyncServicesModule,
    MongooseModule.forRoot(process.env.MONGODB_URL + 'test', { connectionName: 'db_behoririka' }),
    SequelizeModule.forRoot({
      name: 'db_behoririka',
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: 'db_behoririka',
      models: [OrdonnanceSql, CentreSql, PersonnelSql, FonctionSql, VisiteaffilieSql, ServiceSql, AffilieSql, AdherentSql, MedecinTravailSql], // Vous pouvez ajuster cette option en fonction de vos besoins
    }),
    MongooseModule.forFeature([
      { name: Centre.name, schema: CentreSchema },
      { name: PersonnelMongo.name, schema: PersonnelSchema },
      { name: FonctionMongo.name, schema: FonctionSchema },
      { name: VisiteaffilieMongo.name, schema: VisiteaffilieSchema },
      { name: ServiceMongo.name, schema: ServiceSchema },
      { name: AffilieMongoDb.name, schema: AffilieSchema },
      { name: AdherentMongo.name, schema: AdherentSchema },
      { name: MedecinTravailMongo.name, schema: MedecinTravailSchema },
      { name: OrdonnanceMongo.name, schema: OrdonnanceSchema }
    ], 'db_behoririka')],

  controllers: [PersonnelController,
    ServiceController,
    FonctionController,
    VisiteAffilieController,
    CentreController, DbBehoririkaController,
    AffilieController, AdherentController,
    MedecinTravailController,
  ],

  providers: [
    OrdonnanceService,
    VisiteService,
    UtilService,
    MappingService,
    SyncroService,
    AdherentService,
    {
      provide: 'SEQUELIZE',
      useValue: sequelize,
    }, {
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
    {
      provide: 'AffilieSql',
      useValue: AffilieSql
    },
    {
      provide: 'AdherentSql',
      useValue: AdherentSql
    },
    {
      provide: 'MedecinTravailSql',
      useValue: MedecinTravailSql
    },
    {
      provide: 'OrdonnanceSql',
      useValue: OrdonnanceSql
    },
    AffilieService,
    PersonnelService,
    ServiceService,
    FonctionService,
    CentreService, DbBehoririkaService, MedecinTravailService,
  ],
  exports: [
    OrdonnanceService,
    MedecinTravailService,
    MongooseModule,
    VisiteService,
    UtilService,
    MappingService,
    SyncroService,
    {
      provide: 'SEQUELIZE',
      useValue: sequelize,
    }, {
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
    {
      provide: 'MedecinTravailSql',
      useValue: MedecinTravailSql
    },
    {
      provide: 'OrdonnanceSql',
      useValue: OrdonnanceSql
    },
    PersonnelService,
    ServiceService,
    FonctionService,
    CentreService, DbBehoririkaService]
})
export class DbBehoririka {

}
