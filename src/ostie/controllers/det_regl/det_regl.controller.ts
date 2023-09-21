import { Controller, Param, Post } from '@nestjs/common';
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
  
  @Post('update/sql-to-mongo')
  async updatesyncDetReglSql(): Promise<void> {
    return this.detreglservice.updateDetReglinMongodbDetRegl();
  }
  @Post('update/mongo-to-sql')
  async updatesyncDetReglMongotoSQL(): Promise<void> {
    return this.detreglservice.updateDetReglinSequelizeDetRegl();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.detreglservice.updateDetReglInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.detreglservice.updateDetReglInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.detreglservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.detreglservice.updateDelete('mongoose');
  }
}
