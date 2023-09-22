import { Controller,Param,Post, Put, Delete } from '@nestjs/common';
import { CentreService } from 'src/db_ampasamadinika/service/centre/centre.service';


@Controller('db_ampasamadinika/centre')
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
  @Put('update/sql-to-mongo')
  async updatesyncCentreSql(): Promise<void> {
    return this.centreservice.updateCentreinMongodbCentre();
  }
  @Put('update/mongo-to-sql')
  async updatesyncCentreMongotoSQL(): Promise<void> {
    return this.centreservice.updateCentreinSequelizeCentre();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.centreservice.updateCentreInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.centreservice.updateCentreInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.centreservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.centreservice.updateDelete('mongoose');
  }

  
}
