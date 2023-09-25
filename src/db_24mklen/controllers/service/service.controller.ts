import { Controller,Param,Post, Put, Delete } from '@nestjs/common';
import { ServiceService } from 'src/db_24mklen/service/service/service.service';

@Controller('db_24mklen/service')
export class ServiceController {
    constructor(
        private readonly serviceservice:ServiceService,
    ){}
    @Post('/sql-to-mongo')
  async syncServiceSQLtoMongo(): Promise<string> {
    return this.serviceservice.syncToMongooseService();
  }
  @Post('/mongo-to-sql')
  async syncServiceMongotoSQL(): Promise<string> {
    return this.serviceservice.syncToSequelizeService();
  }
  @Put('update/sql-to-mongo')
  async updatesyncServiceMongotoSQL(): Promise<void> {
    return this.serviceservice.updateServiceinMongodbService();
  }
  @Put('update/mongo-to-sql')
  async updatesyncServiceSQLtoMongo(): Promise<void> {
    return this.serviceservice.updateServiceinSequelizeService();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.serviceservice.updateServiceInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.serviceservice.updateServiceInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.serviceservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.serviceservice.updateDelete('mongoose');
  }
  
}
