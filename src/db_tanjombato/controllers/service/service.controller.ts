import { Controller,Param,Post } from '@nestjs/common';
import { ServiceService } from 'src/db_tanjombato/service/service/service.service';

@Controller('db-tanjombato/service')
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
  @Post('update/sql-to-mongo')
  async updatesyncServiceMongotoSQL(): Promise<void> {
    return this.serviceservice.updateServiceinMongodbService();
  }
  @Post('update/mongo-to-sql')
  async updatesyncServiceSQLtoMongo(): Promise<void> {
    return this.serviceservice.updateServiceinSequelizeService();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.serviceservice.updateServiceInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.serviceservice.updateServiceInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.serviceservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.serviceservice.updateDelete('mongoose');
  }
  
}
