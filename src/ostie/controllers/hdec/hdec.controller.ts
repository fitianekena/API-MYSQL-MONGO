import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { HdecService } from 'src/ostie/service/hdec/hdec.service';

@Controller('ostie/hdec')
export class HdecController {
    constructor(
        private readonly hdecservice:HdecService,
    ){}
    @Post('/sql-to-mongo')
  async syncHdecSQLtoMongo(): Promise<string> {
    return this.hdecservice.syncToMongooseHdec();
  }
  @Post('/mongo-to-sql')
  async syncHdecMongotoSQL(): Promise<string> {
    return this.hdecservice.syncToSequelizeHdec();
  }
  
  @Put('update/sql-to-mongo')
  async updatesyncHdecSql(): Promise<void> {
    return this.hdecservice.updateHdecinMongodbHdec();
  }
  @Put('update/mongo-to-sql')
  async updatesyncHdecMongotoSQL(): Promise<void> {
    return this.hdecservice.updateHdecinSequelizeHdec();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.hdecservice.updateHdecInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.hdecservice.updateHdecInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.hdecservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.hdecservice.updateDelete('mongoose');
  }
}
