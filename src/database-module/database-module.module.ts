import { Module } from '@nestjs/common';
import { Sequelize } from 'sequelize';
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
 // Import your custom service

@Module({
  imports:[Db24mklen,DbAmpasamadinikaModule,DbBehoririka,DbOstieModule,DbTanjombato,OstieModule,SyncServicesModule],
  providers: [SequelizeConnectionService,UtilService,ClassingService],
  exports: [SequelizeConnectionService],
})
export class DatabaseModule {
  constructor(private sequelizeConnectionService: SequelizeConnectionService,
    @InjectConnection('db_24mklen')private readonly mklen_24:Sequelize,
    @InjectConnection('db_ampasamadinika')private readonly ampasamadinika:Sequelize,
    @InjectConnection('db_behoririka')private readonly behoririka:Sequelize,
    @InjectConnection('db_ostie')private readonly dbostie:Sequelize,
    @InjectConnection('db_tanjombato')private readonly tanjombato:Sequelize,
    @InjectConnection('ostie')private readonly ostie:Sequelize,
    ) {
    // Create and configure your Sequelize connections here
    const connection1 = mklen_24;

    const connection2 = ampasamadinika;
    const connection3=behoririka;
  
    // Add connections to the service with their names
    this.sequelizeConnectionService.addConnection('db_24mklen',connection1);
    this.sequelizeConnectionService.addConnection('db_ampasamadinika',connection2);
    this.sequelizeConnectionService.addConnection('db_behoririka',connection3);
    this.sequelizeConnectionService.addConnection('db_ostie',dbostie);
    this.sequelizeConnectionService.addConnection('db_tanjombato',tanjombato);
    this.sequelizeConnectionService.addConnection('ostie',ostie);
  }
}
