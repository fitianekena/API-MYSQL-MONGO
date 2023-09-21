import { Controller, Param, Post } from '@nestjs/common';
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
  
  @Post('update/sql-to-mongo')
  async updatesyncEcheanceSql(): Promise<void> {
    return this.echeanceservice.updateEcheanceinMongodbEcheance();
  }
  @Post('update/mongo-to-sql')
  async updatesyncEcheanceMongotoSQL(): Promise<void> {
    return this.echeanceservice.updateEcheanceinSequelizeEcheance();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.echeanceservice.updateEcheanceInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.echeanceservice.updateEcheanceInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.echeanceservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.echeanceservice.updateDelete('mongoose');
  }
}
