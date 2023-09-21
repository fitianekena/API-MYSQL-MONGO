import { Controller, Param, Post } from '@nestjs/common';
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
  
  @Post('update/sql-to-mongo')
  async updatesyncEcritureSql(): Promise<void> {
    return this.ecritureservice.updateEcritureinMongodbEcriture();
  }
  @Post('update/mongo-to-sql')
  async updatesyncEcritureMongotoSQL(): Promise<void> {
    return this.ecritureservice.updateEcritureinSequelizeEcriture();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.ecritureservice.updateEcritureInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.ecritureservice.updateEcritureInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.ecritureservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.ecritureservice.updateDelete('mongoose');
  }
}
