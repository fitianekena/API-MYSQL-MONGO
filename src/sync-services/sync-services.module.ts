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

@Module({
    providers:[
        {
            provide: 'DnsAffilie',
            useValue: DnsAffilie,
          },
          {
            provide: 'AdAffilie',
            useValue: AdAffilie,
          },
    ClassingService,ForeignKeyService,ClassLoaderService,SavingOnMongoService,ExtractionService,GettingIdMongoService,ClassLoaderService,ForeignKeyService,ChampMereService,UtilService,MappingService,SyncroService, synchronizeToSequelize, SynchronizeToMongoose, SynchronizeModelsMongooseToSql, SynchronizeModelsSqlToMongoose, Update, UpdateDelete],
    exports:[ClassingService,ForeignKeyService,ClassLoaderService,SavingOnMongoService,ExtractionService,GettingIdMongoService,ClassLoaderService,ForeignKeyService,ChampMereService,UtilService,MappingService,SyncroService, synchronizeToSequelize, SynchronizeToMongoose, SynchronizeModelsMongooseToSql, SynchronizeModelsSqlToMongoose, Update, UpdateDelete]
})
export class SyncServicesModule {
    
}
