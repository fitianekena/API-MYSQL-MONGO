import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';

import { DbOstieModule } from './db_ostie/db_ostie.module';


import { DbAmpasamadinikaModule } from './db_ampasamadinika/db_ampasamadinika.module';
import { UtilService } from './util.service';
import { MappingService } from './mapping.service';
import { SyncroService } from './syncro.service';
import { SyncServicesModule } from './sync-services/sync-services.module';
import { DbTanjombato } from './db_tanjombato/db_tanjombato.module';
import { DbBehoririka } from './db_behoririka/db_behoririka.module';
import { Db24mklen } from './db_24mklen/db_24mklen.module';
import { ConfigModule } from '@nestjs/config';
import { OstieModule } from './ostie/ostie.module';
import { ServicesSyncro } from './commons/servicesSyncro.service';
import { ServicesSyncroController } from './commons/servicesSyncroController.controller';
import { ChampMere } from './decorators/champ-mere/champ-mere.decorator';
import { ChampMereService } from './decoratorServices/champ-mere/champ-mere.service';

import { DevtoolsModule } from '@nestjs/devtools-integration';
import { ForeignKey } from 'sequelize-typescript';
import { ForeignKeyService } from './decoratorServices/foreign_key/foreign-key.service';

import { ClassLoaderService } from './sync-services/classLoader.service';
import { DnsAffilie, DnsAffilieSchema } from './test-mongo/schema/dns-affilie.schema';
import { AdAffilie, AdAffilieSchema } from './test-mongo/schema/ad-affilie.schema';
import { Centre, CentreSchema } from './test-mongo/schema/centre.schema';
import { Adherent, AdherentSchema } from './test-mongo/schema/adherent.schema';
import { Fonction, FonctionSchema } from './test-mongo/schema/fonction.schema';
import { GAdherent, GAdherentSchema } from './test-mongo/schema/g-adherent.schema';
import { Activite, ActiviteSchema } from './test-mongo/schema/activite.schema';
import { Carnet, CarnetSchema } from './test-mongo/schema/carnet.schema';
import { DetRegl, DetReglSchema } from './test-mongo/schema/detregl.schema';
import { Echeance, EcheanceSchema } from './test-mongo/schema/echeance.schema';
import { Ecriture, EcritureSchema } from './test-mongo/schema/ecriture.schema';
import { Hdec, HdecSchema } from './test-mongo/schema/hdec.schema';
import { Recepdec, RecepdecSchema } from './test-mongo/schema/recepdec.schema';
import { Reglemt, ReglemtSchema } from './test-mongo/schema/reglemt.schema';
import { Statut, StatutSchema } from './test-mongo/schema/statut.schema';
import { BoAffilie, BoAffilieSchema } from './test-mongo/schema/bo-affilie.schema';
import { InsertionParTableFille } from './sync-services/insertionParTablefille.service';
import { InsertionParTableFilleUpdate } from './sync-services/insertionParTablefilleUpdate.service';
import { MigrateTableFille } from './sync-services/migrateTableFille.service';
import { MedecinTravail, MedecinTravailSchema } from './test-mongo/schema/medecintravail.schema';
import { Ordonnance, OrdonnanceSchema } from './test-mongo/schema/ordonnance.schema';
import { Service, ServiceSchema } from './test-mongo/schema/service.schema';
import { Personnel, PersonnelSchema } from './test-mongo/schema/personnel.schema';
import { Visiteaffilie, VisiteaffilieSchema } from './test-mongo/schema/visiteaffilie.schema';
import { MongoToSqlController } from './commons/mongo-to-sql/mongo-to-sql.controller';
import { ToSqlService } from './commons/toSqlService.service';
import { DatabaseModule } from './database-module/database-module.module';




@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DbOstieModule,
    DatabaseModule,
    DbAmpasamadinikaModule,
    SyncServicesModule,
    DbTanjombato,
    DbBehoririka,
    Db24mklen,
    OstieModule,
    MongooseModule.forRoot(process.env.MONGODB_URL + 'global_test', { connectionName: 'test' }),
    MongooseModule.forFeature([
      { name: DnsAffilie.name, schema: DnsAffilieSchema },
      { name: AdAffilie.name, schema: AdAffilieSchema },
      { name: BoAffilie.name, schema: BoAffilieSchema },
      { name: Centre.name, schema: CentreSchema },
      { name: Adherent.name, schema: AdherentSchema },
      { name: MedecinTravail.name, schema: MedecinTravailSchema },
      { name: Ordonnance.name, schema: OrdonnanceSchema },
      { name: Service.name, schema: ServiceSchema },
      { name: Personnel.name, schema: PersonnelSchema },
      { name: Visiteaffilie.name, schema: VisiteaffilieSchema },
      { name: Fonction.name, schema: FonctionSchema },
      { name: GAdherent.name, schema: GAdherentSchema },
      { name: Activite.name, schema: ActiviteSchema },
      { name: Carnet.name, schema: CarnetSchema },
      { name: DetRegl.name, schema: DetReglSchema },
      { name: Echeance.name, schema: EcheanceSchema },
      { name: Ecriture.name, schema: EcritureSchema },
      { name: Hdec.name, schema: HdecSchema },
      { name: Recepdec.name, schema: RecepdecSchema },
      { name: Reglemt.name, schema: ReglemtSchema },
      { name: Statut.name, schema: StatutSchema },


    ], 'test'),
    

  ],
  controllers: [AppController,MongoToSqlController],
  providers: [ToSqlService,MigrateTableFille, ChampMereService, InsertionParTableFille,InsertionParTableFilleUpdate, ForeignKeyService, ClassLoaderService, AppService, MappingService, SyncroService, UtilService, ServicesSyncro, Object, ServicesSyncroController, ChampMereService],
})
export class AppModule { }
