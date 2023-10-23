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
  providers: [SequelizeConnectionService,UtilService,ClassingService,ToSqlService, MongoConnectionService],
  exports: [SequelizeConnectionService,ToSqlService,MongoConnectionService],
})
export class DatabaseModule {
  constructor(private sequelizeConnectionService: SequelizeConnectionService,
    private readonly mongoconnectionservice:MongoConnectionService,
    @Inject('db_24mklen')private readonly mklen_24:Sequelize,
    @Inject('db_ampasamadinika')private readonly ampasamadinika:Sequelize,
    @Inject('SEQUELIZE')private readonly behoririka:Sequelize,
    @Inject('db_ostie')private readonly dbostie:Sequelize,
    @Inject('db_tanjombato')private readonly tanjombato:Sequelize,
    @Inject('ostie')private readonly ostie:Sequelize,
    @InjectConnection('db_24mklen') private readonly db_24mklen: Connection,
    @InjectConnection('db_ampasamadinika') private readonly db_ampasamadinika: Connection,
    @InjectConnection('db_ostie') private readonly db_ostie: Connection,
    @InjectConnection('db_tanjombato') private readonly db_tanjombato: Connection,
    @InjectConnection('ostie') private readonly ostiemongo: Connection,
    @InjectConnection('db_behoririka') private readonly db_behoririka: Connection,
    @InjectConnection('test') private readonly test: Connection,
    ) {
    // Create and configure your Sequelize connections here
    const connection1 = mklen_24;
    const connection2 = ampasamadinika;
    const connection3=behoririka;
      
    // Add connections to the service with their names
    this.sequelizeConnectionService.addConnection('db_24mklen',connection1);
    this.sequelizeConnectionService.addConnection('db_ampasamadinika',connection2);
    // const newLocal : SequelizeModuleOptions = {
    //   dialect: 'mysql' as Dialect,
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '',
    //   database: 'db_behoririka',
    // };
    this.sequelizeConnectionService.addConnection('db_behoririka',connection3);
    this.sequelizeConnectionService.addConnection('db_ostie',dbostie);
    this.sequelizeConnectionService.addConnection('db_tanjombato',tanjombato);
    this.sequelizeConnectionService.addConnection('ostie',ostie);
    this.mongoconnectionservice.addConnection('db_24mklen',db_24mklen);
    this.mongoconnectionservice.addConnection('db_ampasamadinika',db_ampasamadinika);
    this.mongoconnectionservice.addConnection('db_behoririka',db_behoririka);
    this.mongoconnectionservice.addConnection('db_ostie',db_ostie);
    this.mongoconnectionservice.addConnection('db_tanjombato',db_tanjombato);
    this.mongoconnectionservice.addConnection('ostie',ostiemongo);
    this.mongoconnectionservice.addConnection('global_test',test);
    // console.log(behoririka.models)
  }
}
