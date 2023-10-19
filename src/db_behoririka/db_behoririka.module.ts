import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Centre as CentreSql } from './schema/mysql/centre.schema';
import { Centre, CentreSchema } from './schema/mongodb/centre.schema';
import { Personnel as PersonnelSql } from './schema/mysql/personnel.schema';
import { Fonction as FonctionSql } from './schema/mysql/fonction.schema';
import { Fonction, Fonction as FonctionMongo, FonctionSchema } from './schema/mongodb/fonction.schema';
import sequelize from 'sequelize';
import { SyncroService } from 'src/syncro.service';
import { MappingService } from 'src/mapping.service';
import { UtilService } from 'src/util.service';
import {  Visiteaffilie as VisiteaffilieSql } from './schema/mysql/visiteaffilie.schema';
import { Service as ServiceSql } from './schema/mysql/service.schema';
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
import { Affilie, Affilie as AffilieSql } from './schema/mysql/affilie.schema';
import { Affilie as AffilieMongoDb, AffilieSchema } from './schema/mongodb/affilie.schema';
import { AffilieService } from './service/affilie/affilie.service';
import { AffilieController } from './controllers/affilie/affilie.controller';
import {  Adherent as AdherentSql } from './schema/mysql/adherent.schema';
import { Adherent as AdherentMongo } from './schema/mongodb/adherent.schema';
import { AdherentController } from './controllers/adherent/adherent.controller';
import { AdherentService } from './service/adherent/adherent.service';
import {  MedecinTravail as MedecinTravailSql } from './schema/mysql/medecintravail.schema';
import { MedecinTravail as MedecinTravailMongo} from './schema/mongodb/medecintravail.schema';
import { MedecinTravailService } from './service/medecintravail/medecintravail.service';
import { MedecinTravailController } from './controllers/medecintravail/medecintravail.controller';
import {  Ordonnance as OrdonnanceSql } from './schema/mysql/ordonnance.schema';
import { OrdonnanceService } from './service/ordonnance/ordonnance.service';
import { OrdonnanceController } from './controllers/ordonnance/ordonnance.controller';
import { AdAffilie, AdAffilieSchema } from 'src/test-mongo/schema/ad-affilie.schema';
import { BoAffilie, BoAffilieSchema } from 'src/test-mongo/schema/bo-affilie.schema';
import { DnsAffilie, DnsAffilieSchema } from 'src/test-mongo/schema/dns-affilie.schema';
import { Adherent, AdherentSchema } from 'src/test-mongo/schema/adherent.schema';
import { MedecinTravail, MedecinTravailSchema } from 'src/test-mongo/schema/medecintravail.schema';
import { Ordonnance, OrdonnanceSchema } from 'src/test-mongo/schema/ordonnance.schema';
import { Service, ServiceSchema } from 'src/test-mongo/schema/service.schema';
import { Personnel, PersonnelSchema } from 'src/test-mongo/schema/personnel.schema';
import { Visiteaffilie, VisiteaffilieSchema } from 'src/test-mongo/schema/visiteaffilie.schema';
import { MongoToSqlModule } from 'src/sync-services/mongo-to-sql/mongo-to-sql.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    SyncServicesModule,
    MongoToSqlModule,
    MongooseModule.forRoot(process.env.MONGODB_URL + 'db_behoririka', { connectionName: 'db_behoririka' }),
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
      { name: DnsAffilie.name, schema: DnsAffilieSchema },
      { name: AdAffilie.name, schema: AdAffilieSchema },
      { name: BoAffilie.name, schema: BoAffilieSchema },
      { name: Affilie.name, schema: AffilieSchema },
      { name: Centre.name, schema: CentreSchema },
      { name: Adherent.name, schema: AdherentSchema },
      { name: MedecinTravail.name, schema: MedecinTravailSchema },
      { name: Ordonnance.name, schema: OrdonnanceSchema },
      { name: Service.name, schema: ServiceSchema },
      { name: Personnel.name, schema: PersonnelSchema },
      { name: Visiteaffilie.name, schema: VisiteaffilieSchema },
      { name: Fonction.name, schema: FonctionSchema },
    ], 'db_behoririka')],

  controllers: [
    OrdonnanceController,PersonnelController,
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
    },
    {
      provide: 'db_behoririka',
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
    MongooseModule,
    OrdonnanceService,
    MedecinTravailService,
    MongooseModule,
    VisiteService,
    UtilService,
    MappingService,
    SyncroService,
    {
      provide: 'db_behoririka',
      useValue: sequelize,
    },
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
