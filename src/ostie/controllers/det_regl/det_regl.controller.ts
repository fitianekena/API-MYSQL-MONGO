import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { DetReglService } from 'src/ostie/service/det_regl/det_regl.service';

@Controller('ostie/det_regl')
export class DetReglController {
    constructor(
        private readonly detreglservice:DetReglService,
    ){}
    @Post('/sql-to-mongo')
  async syncDetReglSQLtoMongo(): Promise<string> {
    return this.detreglservice.syncToMongooseDetRegl();
  }
  @Post('/mongo-to-sql')
  async syncDetReglMongotoSQL(): Promise<string> {
    return this.detreglservice.syncToSequelizeDetRegl();
  }
  
  @Put('update/sql-to-mongo')
  async updatesyncDetReglSql(): Promise<void> {
    return this.detreglservice.updateDetReglinMongodbDetRegl();
  }
  @Put('update/mongo-to-sql')
  async updatesyncDetReglMongotoSQL(): Promise<void> {
    return this.detreglservice.updateDetReglinSequelizeDetRegl();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.detreglservice.updateDetReglInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.detreglservice.updateDetReglInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.detreglservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.detreglservice.updateDelete('mongoose');
  }
}
