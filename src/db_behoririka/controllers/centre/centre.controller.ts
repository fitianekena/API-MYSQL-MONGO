import { Controller,Param,Post } from '@nestjs/common';
import { CentreService } from 'src/db_behoririka/service/centre/centre.service';


@Controller('db-behoririka/centre')
export class CentreController {
    constructor(
        private readonly centreservice:CentreService,
    ){}
    @Post('/sql-to-mongo')
  async syncCentreSQLtoMongo(): Promise<string> {
    return this.centreservice.syncToMongooseCentre();
  }
  @Post('/mongo-to-sql')
  async syncCentreMongotoSQL(): Promise<string> {
    return this.centreservice.syncToSequelizeCentre();
  }
  @Post('update/sql-to-mongo')
  async updatesyncCentreMongotoSQL(): Promise<void> {
    return this.centreservice.updateCentreinMongodbCentre();
  }
  @Post('update/mongo-to-sql')
  async updatesyncCentreSQLtoMongo(): Promise<void> {
    return this.centreservice.updateCentreinSequelizeCentre();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.centreservice.updateCentreInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.centreservice.updateCentreInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.centreservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.centreservice.updateDelete('mongoose');
  }

  
}