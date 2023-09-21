import { Controller, Param, Post } from '@nestjs/common';
import { RecepdecService } from 'src/ostie/service/recepdec/recepdec.service';

@Controller('ostie/recepdec')
export class RecepdecController {
    constructor(
        private readonly recepdecservice:RecepdecService,
    ){}
    @Post('/sql-to-mongo')
  async syncRecepdecSQLtoMongo(): Promise<string> {
    return this.recepdecservice.syncToMongooseRecepdec();
  }
  
  @Post('update/sql-to-mongo')
  async updatesyncRecepdecSql(): Promise<void> {
    return this.recepdecservice.updateRecepdecinMongodbRecepdec();
  }
  @Post('update/mongo-to-sql')
  async updatesyncRecepdecMongotoSQL(): Promise<void> {
    return this.recepdecservice.updateRecepdecinSequelizeRecepdec();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.recepdecservice.updateRecepdecInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.recepdecservice.updateRecepdecInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.recepdecservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.recepdecservice.updateDelete('mongoose');
  }

}
