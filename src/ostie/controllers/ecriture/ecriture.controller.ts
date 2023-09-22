import { Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { EcritureService } from 'src/ostie/service/ecriture/ecriture.service';

@Controller('ostie/ecriture')
export class EcritureController {
    constructor(
        private readonly ecritureservice:EcritureService,
    ){}
    @Post('/sql-to-mongo')
  async syncEcritureSQLtoMongo(): Promise<string> {
    return this.ecritureservice.syncToMongooseEcriture();
  }
  @Post('/mongo-to-sql')
  async syncEcritureMongotoSQL(): Promise<string> {
    return this.ecritureservice.syncToSequelizeEcriture();
  }
  
  @Put('update/sql-to-mongo')
  async updatesyncEcritureSql(): Promise<void> {
    return this.ecritureservice.updateEcritureinMongodbEcriture();
  }
  @Put('update/mongo-to-sql')
  async updatesyncEcritureMongotoSQL(): Promise<void> {
    return this.ecritureservice.updateEcritureinSequelizeEcriture();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.ecritureservice.updateEcritureInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.ecritureservice.updateEcritureInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.ecritureservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.ecritureservice.updateDelete('mongoose');
  }
}
