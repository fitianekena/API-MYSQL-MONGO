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

@Module({
    imports: [
        SyncServicesModule,
        MongooseModule.forRoot('mongodb://127.0.0.1:27017/ostie', { connectionName: 'ostie' }),
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '',
          database: 'ostie',
          models: [ActiviteSql, AdherentSql, CarnetSql, CentreSql, DetReglSql, EcheanceSql, EcritureSql], // Vous pouvez ajuster cette option en fonction de vos besoins
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
    
      controllers: [],
      providers: [
        
        {
          provide: 'SEQUELIZE',
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
      ],
      exports: [MongooseModule]
})
export class OstieModule {

}
