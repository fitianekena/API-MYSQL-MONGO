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
import { GettingIdMongoService } from 'src/decoratorServices/gettingIdMongoService.service';

@Module({
    providers:[GettingIdMongoService,ClassLoaderService,ForeignKeyService,ChampMereService,UtilService,MappingService,SyncroService, synchronizeToSequelize, SynchronizeToMongoose, SynchronizeModelsMongooseToSql, SynchronizeModelsSqlToMongoose, Update, UpdateDelete],
    exports:[GettingIdMongoService,ClassLoaderService,ForeignKeyService,ChampMereService,UtilService,MappingService,SyncroService, synchronizeToSequelize, SynchronizeToMongoose, SynchronizeModelsMongooseToSql, SynchronizeModelsSqlToMongoose, Update, UpdateDelete]
})
export class SyncServicesModule {
    
}
