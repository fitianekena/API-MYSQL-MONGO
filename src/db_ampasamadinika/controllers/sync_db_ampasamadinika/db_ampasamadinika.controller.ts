import { Controller,Param,Post } from '@nestjs/common';
import { SyncDbAmpasamadinikaService } from 'src/db_ampasamadinika/service/sync_db_ampasamadinika/sync_db_ampasamadinika.service';

@Controller('db-ampasamadinika')
export class SyncDbAmpasamadinikaController {
    constructor(
        private readonly syncronisationservice:SyncDbAmpasamadinikaService,
    ){}
    @Post('/centre/sql-to-mongo')
  async syncCentreSQLtoMongo(): Promise<string> {
    return this.syncronisationservice.syncToMongooseCentre();
  }
  @Post('/centre/mongo-to-sql')
  async syncCentreMongotoSQL(): Promise<string> {
    return this.syncronisationservice.syncToSequelizeCentre();
  }
  @Post('update/centre/sql-to-mongo')
  async updatesyncCentreMongotoSQL(): Promise<void> {
    return this.syncronisationservice.updateCentreinMongodbCentre();
  }
  @Post('update/centre/mongo-to-sql')
  async updatesyncCentreSQLtoMongo(): Promise<void> {
    return this.syncronisationservice.updateCentreinSequelizeCentre();
  }

  @Post('/personnel/sql-to-mongo')
  async syncPersonnelSQLtoMongo(): Promise<string> {
    return this.syncronisationservice.syncToMongoosePersonnel();
  }
  @Post('/personnel/mongo-to-sql')
  async syncPersonnelMongotoSQL(): Promise<string> {
    return this.syncronisationservice.syncToSequelizePersonnel();
  }
  @Post('update/personnel/sql-to-mongo')
  async updatesyncPersonnelMongotoSQL(): Promise<void> {
    return this.syncronisationservice.updatePersonnelinMongodbPersonnel();
  }
  @Post('update/personnel/mongo-to-sql')
  async updatesyncPersonnelSQLtoMongo(): Promise<void> {
    return this.syncronisationservice.updatePersonnelinSequelizePersonnel();
  }

  @Post('/fonction/sql-to-mongo')
  async syncFonctionSQLtoMongo(): Promise<string> {
    return this.syncronisationservice.syncToMongooseFonction();
  }
  @Post('/fonction/mongo-to-sql')
  async syncFonctionMongotoSQL(): Promise<string> {
    return this.syncronisationservice.syncToSequelizeFonction();
  }
  @Post('update/fonction/sql-to-mongo')
  async updatesyncFonctionMongotoSQL(): Promise<void> {
    return this.syncronisationservice.updateFonctioninMongodbFonction();
  }
  @Post('update/fonction/mongo-to-sql')
  async updatesyncFonctionSQLtoMongo(): Promise<void> {
    return this.syncronisationservice.updateFonctioninSequelizeFonction();
  }
  @Post('/visiteaffilie/sql-to-mongo')
  async syncvisiteaffilieSQLtoMongo(): Promise<string> {
    return this.syncronisationservice.syncToMongooseVisiteaffilie();
  }
  @Post('/visiteaffilie/mongo-to-sql')
  async syncvisiteaffilieMongotoSQL(): Promise<string> {
    return this.syncronisationservice.syncToSequelizeVisiteaffilie();
  }
  @Post('update/visiteaffilie/sql-to-mongo')
  async updatesyncvisiteaffilieMongotoSQL(): Promise<void> {
    return this.syncronisationservice.updateVisiteaffilieinMongodbVisiteaffilie();
  }
  @Post('update/visiteaffilie/mongo-to-sql')
  async updatesyncvisiteaffilieSQLtoMongo(): Promise<void> {
    return this.syncronisationservice.updateVisiteaffilieinSequelizeVisiteaffilie();
  }

  @Post('/service/sql-to-mongo')
  async syncServiceSQLtoMongo(): Promise<string> {
    return this.syncronisationservice.syncToMongooseService();
  }
  @Post('/service/mongo-to-sql')
  async syncServiceMongotoSQL(): Promise<string> {
    return this.syncronisationservice.syncToSequelizeService();
  }
  @Post('update/service/sql-to-mongo')
  async updatesyncServiceMongotoSQL(): Promise<void> {
    return this.syncronisationservice.updateServiceinMongodbService();
  }
  @Post('update/service/mongo-to-sql')
  async updatesyncServiceSQLtoMongo(): Promise<void> {
    return this.syncronisationservice.updateServiceinSequelizeService();
  }
  @Post('update/visiteaffilie/sql-to-mongo/:id')
  async updatesyncvisiteaffilieSQLtoMongoById(@Param('id') id:any): Promise<void> {
    return this.syncronisationservice.updateVisiteaffilieInMongoById(id);
  }
  @Post('update/visiteaffilie/mongo-to-sql/:id')
  async updatesyncvisiteaffilieMongotoSQLById(@Param('id') id:any): Promise<void> {
    return this.syncronisationservice.updateVisiteaffilieInMySqlById(id);
  }
}
