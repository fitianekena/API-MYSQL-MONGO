import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import sequelize from 'sequelize';
import { SyncServicesModule } from 'src/sync-services/sync-services.module';
import { Activite as ActiviteMongo, ActiviteSchema} from './schema/mongodb/activite.schema';
import { Activite as ActiviteSql } from './schema/mysql/activite.schema';
import { Adherent as AdherentSql } from './schema/mysql/adherent.schema';
import { Carnet as CarnetSql } from './schema/mysql/carnet.schema';
import { Centre as CentreSql } from './schema/mysql/centre.schema';
import { DetRegl as DetReglSql } from './schema/mysql/det_regl.schema';
import { Echeance as EcheanceSql } from './schema/mysql/echeance.schema';
import { Ecriture as EcritureSql } from './schema/mysql/ecriture.schema';
import { Hdec as HdecSql } from './schema/mysql/hdec.schema';
import { Recepdec as RecepdecSql } from './schema/mysql/recepdec.schema';
import { Reglemt as ReglemtSql } from './schema/mysql/reglemt.schema';
import { Statut as StatutSql } from './schema/mysql/statut.schema';

import { Adherent as AdherentMongo, AdherentSchema} from './schema/mongodb/adherent.schema';
import { Carnet as CarnetMongo, CarnetSchema} from './schema/mongodb/carnet.schema';
import { Centre as CentreMongo, CentreSchema} from './schema/mongodb/centre.schema';
import { DetRegl as DetReglMongo, DetReglSchema } from './schema/mongodb/detregl.schema';
import { Echeance  as  EcheanceMongo, EcheanceSchema} from './schema/mongodb/echeance.schema';
import { Ecriture as EcritureMongo, EcritureSchema } from './schema/mongodb/ecriture.schema';
import { Hdec as HdecMongo, HdecSchema } from './schema/mongodb/hdec.schema';
import { Recepdec as RecepdecMongo, RecepdecSchema} from './schema/mongodb/recepdec.schema';
import { Reglemt as ReglemtMongo, ReglemtSchema} from './schema/mongodb/reglemt.schema';
import { Statut as StatutMongo, StatutSchema} from './schema/mongodb/statut.schema';
import { ConfigModule } from '@nestjs/config';
import { OstieController } from './ostie.controller';
import { ActiviteController } from './controllers/activite/activite.controller';
import { AdherentController } from './controllers/adherent/adherent.controller';
import { CentreController } from './controllers/centre/centre.controller';
import { CarnetController } from './controllers/carnet/carnet.controller';
import { DetReglController } from './controllers/det_regl/det_regl.controller';
import { EcheanceController } from './controllers/echeance/echeance.controller';
import { EcritureController } from './controllers/ecriture/ecriture.controller';
import { HdecController } from './controllers/hdec/hdec.controller';
import { RecepdecController } from './controllers/recepdec/recepdec.controller';
import { StatusController } from './controllers/status/status.controller';
import { OstieService } from './ostie.service';
import { ActiviteService } from './service/activite/activite.service';
import { AdherentService } from './service/adherent/adherent.service';
import { CarnetService } from './service/carnet/carnet.service';
import { CentreService } from './service/centre/centre.service';
import { DetReglService } from './service/det_regl/det_regl.service';
import { EcheanceService } from './service/echeance/echeance.service';
import { EcritureService } from './service/ecriture/ecriture.service';
import { HdecService } from './service/hdec/hdec.service';
import { RecepdecService } from './service/recepdec/recepdec.service';
import { StatutService } from './service/statut/statut.service';
import { ReglemtService } from './service/reglemt/reglemt.service';
import { ReglemtController } from './controllers/reglemt/reglemt.controller';

@Module({
    imports: [
        ConfigModule.forRoot(),
        SyncServicesModule,
        MongooseModule.forRoot(process.env.MONGODB_URL+'ostie', { connectionName: 'ostie' }),
        SequelizeModule.forRoot({
          dialect: 'mysql',
          name:'ostie',
          host: process.env.MYSQL_HOST,
          port: parseInt(process.env.MYSQL_PORT),
          username: process.env.MYSQL_USERNAME,
          password: process.env.MYSQL_PASSWORD,
          database: 'ostie',
          models: [ActiviteSql, AdherentSql, CarnetSql, CentreSql, DetReglSql, EcheanceSql, EcritureSql, HdecSql, RecepdecSql, ReglemtSql, StatutSql], // Vous pouvez ajuster cette option en fonction de vos besoins
        }),
        MongooseModule.forFeature([
          { name: ActiviteMongo.name, schema: ActiviteSchema },
          { name: AdherentMongo.name, schema: AdherentSchema },
          { name: CarnetMongo.name, schema: CarnetSchema },
          { name: CentreMongo.name, schema: CentreSchema },
          { name: DetReglMongo.name, schema: DetReglSchema },
          { name: EcheanceMongo.name, schema: EcheanceSchema },
          { name: EcritureMongo.name, schema: EcritureSchema },
          { name: HdecMongo.name, schema: HdecSchema },
          { name: RecepdecMongo.name, schema: RecepdecSchema },
          { name: ReglemtMongo.name, schema: ReglemtSchema },
          { name: StatutMongo.name, schema: StatutSchema }
    
        ], 'ostie')],
    
      controllers: [OstieController,ActiviteController,AdherentController,CentreController,CarnetController,DetReglController,EcheanceController,EcritureController,HdecController,RecepdecController,StatusController,ReglemtController],
      providers: [
        OstieService,ActiviteService,AdherentService,CentreService,CarnetService,DetReglService,EcheanceService,EcritureService,HdecService,RecepdecService,StatutService,ReglemtService
        
        ,{
          provide: 'ostie',
          useValue: sequelize,
        }, 
        {
          provide: 'ActiviteSql',
          useValue: ActiviteSql,
        }, 
        {
          provide: 'AdherentSql',
          useValue: AdherentSql,
        }, 
        {
          provide: 'CarnetSql',
          useValue: CarnetSql,
        }, 
        {
          provide: 'CentreSql',
          useValue: CentreSql,
        }, 
        {
          provide: 'DetReglSql',
          useValue: DetReglSql,
        }, 
        {
          provide: 'EcheanceSql',
          useValue: EcheanceSql,
        }, 
        {
          provide: 'EcritureSql',
          useValue: EcritureSql,
        }, 
        {
          provide: 'HdecSql',
          useValue: HdecSql,
        }, 
        {
          provide: 'RecepdecSql',
          useValue: RecepdecSql,
        }, 
        {
          provide: 'ReglemtSql',
          useValue: ReglemtSql,
        }, 
        {
          provide: 'StatutSql',
          useValue: StatutSql,
        },
      ],
      exports: [
        {
          provide: 'ostie',
          useValue: sequelize,
        }, MongooseModule,OstieService,]
})
export class OstieModule {

}
