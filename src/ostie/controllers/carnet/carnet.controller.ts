import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { CarnetService } from 'src/ostie/service/carnet/carnet.service';

@Controller('ostie/carnet')
export class CarnetController {
    constructor(
        private readonly carnetservice:CarnetService,
    ){}
    @Post('/sql-to-mongo')
  async syncCarnetSQLtoMongo(): Promise<string> {
    return this.carnetservice.syncToMongooseCarnet();
  }
  @Post('/mongo-to-sql')
  async syncCarnetMongotoSQL(): Promise<string> {
    return this.carnetservice.syncToSequelizeCarnet();
  }
  
  @Put('update/sql-to-mongo')
  async updatesyncCarnetSql(): Promise<void> {
    return this.carnetservice.updateCarnetinMongodbCarnet();
  }
  @Put('update/mongo-to-sql')
  async updatesyncCarnetMongotoSQL(): Promise<void> {
    return this.carnetservice.updateCarnetinSequelizeCarnet();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.carnetservice.updateCarnetInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.carnetservice.updateCarnetInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.carnetservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.carnetservice.updateDelete('mongoose');
  }

}
