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
      { name: DnsAffilie.name, schema: DnsAffilieSchema },
      { name: AdAffilie.name, schema: AdAffilieSchema },
      { name: Centre.name, schema: CentreSchema },
      { name: Adherent.name, schema: AdherentSchema },
      { name: Fonction.name, schema: FonctionSchema },
      
    ], 'test'),
    
    ],
  controllers: [AppController],
  providers: [ForeignKeyService,ClassLoaderService,AppService,MappingService,SyncroService,UtilService,ServicesSyncro,Object,ServicesSyncroController,ChampMereService],
  
})
export class AppModule { }
