import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { EcheanceService } from 'src/ostie/service/echeance/echeance.service';

@Controller('ostie/echeance')
export class EcheanceController {
    constructor(
        private readonly echeanceservice:EcheanceService,
    ){}
    @Post('/sql-to-mongo')
  async syncEcheanceSQLtoMongo(): Promise<string> {
    return this.echeanceservice.syncToMongooseEcheance();
  }
  @Post('/mongo-to-sql')
  async syncEcheanceMongotoSQL(): Promise<string> {
    return this.echeanceservice.syncToSequelizeEcheance();
  }
  
  @Put('update/sql-to-mongo')
  async updatesyncEcheanceSql(): Promise<void> {
    return this.echeanceservice.updateEcheanceinMongodbEcheance();
  }
  @Put('update/mongo-to-sql')
  async updatesyncEcheanceMongotoSQL(): Promise<void> {
    return this.echeanceservice.updateEcheanceinSequelizeEcheance();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.echeanceservice.updateEcheanceInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.echeanceservice.updateEcheanceInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.echeanceservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.echeanceservice.updateDelete('mongoose');
  }
}
