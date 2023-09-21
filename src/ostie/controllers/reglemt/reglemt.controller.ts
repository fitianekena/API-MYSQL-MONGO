import { Controller, Param, Post } from '@nestjs/common';
import { ReglemtService } from 'src/ostie/service/reglemt/reglemt.service';

@Controller('ostie/reglemt')
export class ReglemtController {
    constructor(
        private readonly reglemtservice:ReglemtService,
    ){}
    @Post('/sql-to-mongo')
  async syncReglemtSQLtoMongo(): Promise<string> {
    return this.reglemtservice.syncToMongooseReglemt();
  }
  
  @Post('update/sql-to-mongo')
  async updatesyncReglemtSql(): Promise<void> {
    return this.reglemtservice.updateReglemtinMongodbReglemt();
  }
  @Post('update/mongo-to-sql')
  async updatesyncReglemtMongotoSQL(): Promise<void> {
    return this.reglemtservice.updateReglemtinSequelizeReglemt();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.reglemtservice.updateReglemtInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.reglemtservice.updateReglemtInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.reglemtservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.reglemtservice.updateDelete('mongoose');
  }

}
