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
import { MongoNamespace } from './test-mongo/schema/dns-affilie.schema';
import { ClassLoaderService } from './sync-services/classLoader.service';

@Module({
  imports:[
   ConfigModule.forRoot({isGlobal: true}),
    DbOstieModule,
    DbAmpasamadinikaModule,
    SyncServicesModule,
    DbTanjombato,
    DbBehoririka,
    Db24mklen,
    OstieModule,
    MongooseModule.forRoot(process.env.MONGODB_URL+'test', { connectionName: 'test' }),
    MongooseModule.forFeature([
      { name: MongoNamespace.DnsAffilie.name, schema: MongoNamespace.DnsAffilieSchema },
    ], 'test'),
    
    ],
  controllers: [AppController],
  providers: [ForeignKeyService,ClassLoaderService,AppService,MappingService,SyncroService,UtilService,ServicesSyncro,Object,ServicesSyncroController,ChampMereService],
  
})
export class AppModule { }
