import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Centre as CentreSql } from './schema/mysql/Centre.schema';
import { Centre, CentreSchema } from './schema/mongodb/centre.schema';
import { Personnel as PersonnelSql } from './schema/mysql/Personnel.schema';
import { Personnel as PersonnelMongo, PersonnelSchema } from './schema/mongodb/personnel.schema';
import { Fonction as FonctionSql } from './schema/mysql/fonction.schema';
import { Fonction as FonctionMongo, FonctionSchema } from './schema/mongodb/fonction.schema';

import sequelize from 'sequelize';

import { SyncroService } from 'src/syncro.service';
import { MappingService } from 'src/mapping.service';

import { UtilService } from 'src/util.service';

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
import { Db24mklenService } from './db_24mklen.service';
import { Db24mklenController } from './db_24mklen.controller';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot(),
    SyncServicesModule,
    MongooseModule.forRoot(process.env.MONGODB_URL+'db_24mklen', { connectionName: 'db_24mklen' }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_24mklen',
      models: [CentreSql, PersonnelSql, FonctionSql, ServiceSql], // Vous pouvez ajuster cette option en fonction de vos besoins
    }),
    MongooseModule.forFeature([
      { name: Centre.name, schema: CentreSchema },
      { name: PersonnelMongo.name, schema: PersonnelSchema },
      { name: FonctionMongo.name, schema: FonctionSchema },
      { name: ServiceMongo.name, schema: ServiceSchema }

    ], 'db_24mklen')],

  controllers: [PersonnelController,
    ServiceController,
    FonctionController,
    CentreController,
  Db24mklenController],
  providers: [
    UtilService,
    MappingService,
    SyncroService,
    Db24mklenService,
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
      provide: 'ServiceSql',
      useValue: ServiceSql
    },
    PersonnelService,
    ServiceService,
    FonctionService,
    CentreService,
  ],
  exports: [MongooseModule]
})
export class Db24mklen {

}
