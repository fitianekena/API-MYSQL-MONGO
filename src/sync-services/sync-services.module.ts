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
import { ChampMereService } from 'src/decoratorServices/champ-mere.service';

@Module({
    providers:[ChampMereService,UtilService,MappingService,SyncroService, synchronizeToSequelize, SynchronizeToMongoose, SynchronizeModelsMongooseToSql, SynchronizeModelsSqlToMongoose, Update, UpdateDelete],
    exports:[ChampMereService,UtilService,MappingService,SyncroService, synchronizeToSequelize, SynchronizeToMongoose, SynchronizeModelsMongooseToSql, SynchronizeModelsSqlToMongoose, Update, UpdateDelete]
})
export class SyncServicesModule {
    
}
