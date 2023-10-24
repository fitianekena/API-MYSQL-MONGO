import { Inject, Module } from '@nestjs/common';
import { Dialect, Sequelize } from 'sequelize';
import { SequelizeConnectionService } from './sequelize-connection-service/sequelize-connection-service.service';
import { Db24mklen } from 'src/db_24mklen/db_24mklen.module';
import { InjectConnection } from '@nestjs/mongoose';
import { DbAmpasamadinikaModule } from 'src/db_ampasamadinika/db_ampasamadinika.module';
import { DbBehoririka } from 'src/db_behoririka/db_behoririka.module';
import { DbOstieModule } from 'src/db_ostie/db_ostie.module';
import { DbTanjombato } from 'src/db_tanjombato/db_tanjombato.module';
import { OstieModule } from 'src/ostie/ostie.module';
import { AppModule } from 'src/app.module';
import { UtilService } from 'src/util.service';
import { ClassingService } from 'src/sync-services/classing.service';
import { SyncServicesModule } from 'src/sync-services/sync-services.module';
import { ToSqlService } from 'src/commons/toSqlService.service';
import { MongoConnectionService } from './mongo-connection/mongo-connection.service';
import { Connection } from 'mongoose';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
 // Import your custom service

@Module({
  imports:[Db24mklen,DbAmpasamadinikaModule,DbBehoririka,DbOstieModule,DbTanjombato,OstieModule,SyncServicesModule],
  providers: [SequelizeConnectionService,UtilService,ClassingService, MongoConnectionService,ToSqlService,],
  exports: [SequelizeConnectionService,MongoConnectionService,ToSqlService,],
})
export class DatabaseModule {
  constructor(private sequelizeConnectionService: SequelizeConnectionService,
    private readonly mongoconnectionservice:MongoConnectionService,
    
    
    ) {
    // Create and configure your Sequelize connections here
   
      
    
   
  }
}
