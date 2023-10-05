import { Module } from '@nestjs/common';
import { MappingService } from 'src/mapping.service';
import { SyncroService } from 'src/syncro.service';
import { UtilService } from 'src/util.service';
import { SynchronizeModelsMongooseToSql } from './synchronizeModelsMongooseToSql.service';
import { SynchronizeModelsSqlToMongoose } from './synchronizeModelsSqlToMongoose.service';
import { SynchronizeToMongoose } from './synchronizeToMongoose.service';
import { synchronizeToSequelize } from './synchronizeToSequelize.service';
import { Update } from './update.service';
import { UpdateDelete } from './updatedelete.service';
import { ChampMereService } from 'src/decoratorServices/champ-mere/champ-mere.service';
import { ForeignKeyService } from 'src/decoratorServices/foreign_key/foreign-key.service';
import { ClassLoaderService } from './classLoader.service';

import { ExtractionService } from './extraction.service';
import { GettingIdMongoService } from './gettingIdMongoService.service';
import { SavingOnMongoService } from './savingOnMongo.service';
import { ClassingService } from './classing.service';
import { DnsAffilie } from 'src/test-mongo/schema/dns-affilie.schema';
import { AdAffilie } from 'src/test-mongo/schema/ad-affilie.schema';
import { Centre } from 'src/test-mongo/schema/centre.schema';
import { Adherent } from 'src/test-mongo/schema/adherent.schema';
import { MigrateToDbGlobalService } from './migrateToDbGlobalService.service';
import { Fonction } from 'src/test-mongo/schema/fonction.schema';
import { GAdherent } from 'src/test-mongo/schema/g-adherent.schema';
import { Activite } from 'src/test-mongo/schema/activite.schema';
import { Carnet } from 'src/test-mongo/schema/carnet.schema';
import { DetRegl } from 'src/test-mongo/schema/detregl.schema';
import { Echeance } from 'src/test-mongo/schema/echeance.schema';
import { Ecriture } from 'src/test-mongo/schema/ecriture.schema';
import { Hdec } from 'src/test-mongo/schema/hdec.schema';
import { Recepdec } from 'src/test-mongo/schema/recepdec.schema';
import { Reglemt } from 'src/test-mongo/schema/reglemt.schema';
import { Statut } from 'src/test-mongo/schema/statut.schema';
import { BoAffilie } from 'src/test-mongo/schema/bo-affilie.schema';


@Module({
    providers:[
      MigrateToDbGlobalService,
        {
            provide: 'DnsAffilie',
            useValue: DnsAffilie,
          },
          {
            provide: 'AdAffilie',
            useValue: AdAffilie,
          },
          {
            provide: 'Centre',
            useValue: Centre,
          },
          {
            provide: 'Adherent',
            useValue: Adherent,
          },
          {
            provide: 'Fonction',
            useValue: Fonction,
          },
          {
            provide: 'GAdherent',
            useValue: GAdherent,
          },
          {
            provide: 'Activite',
            useValue: Activite,
          }, 
          {
            provide: 'Carnet',
            useValue: Carnet,
          },  
          {
            provide: 'DetRegl',
            useValue: DetRegl,
          }, 
          {
            provide: 'Echeance',
            useValue: Echeance,
          }, 
          {
            provide: 'Ecriture',
            useValue: Ecriture,
          }, 
          {
            provide: 'Hdec',
            useValue: Hdec,
          }, 
          {
            provide: 'Recepdec',
            useValue: Recepdec,
          }, 
          {
            provide: 'Reglemt',
            useValue: Reglemt,
          }, 
          {
            provide: 'Statut',
            useValue: Statut,
          },
          {
            provide: 'BoAffilie',
            useValue: BoAffilie,
          },
    ClassingService,ForeignKeyService,ClassLoaderService,SavingOnMongoService,ExtractionService,GettingIdMongoService,ClassLoaderService,ForeignKeyService,ChampMereService,UtilService,MappingService,SyncroService, synchronizeToSequelize, SynchronizeToMongoose, SynchronizeModelsMongooseToSql, SynchronizeModelsSqlToMongoose, Update, UpdateDelete],
    exports:[MigrateToDbGlobalService,ClassingService,ForeignKeyService,ClassLoaderService,SavingOnMongoService,ExtractionService,GettingIdMongoService,ClassLoaderService,ForeignKeyService,ChampMereService,UtilService,MappingService,SyncroService, synchronizeToSequelize, SynchronizeToMongoose, SynchronizeModelsMongooseToSql, SynchronizeModelsSqlToMongoose, Update, UpdateDelete]
})
export class SyncServicesModule {
    
}
