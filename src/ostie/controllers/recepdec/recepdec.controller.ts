import { Controller, Delete, Param, Post, Put } from '@nestjs/common';
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
  @Post('/mongo-to-sql')
  async syncRecepdecMongotoSQL(): Promise<string> {
    return this.recepdecservice.syncToSequelizeRecepdec();
  }
  
  @Put('update/sql-to-mongo')
  async updatesyncRecepdecSql(): Promise<void> {
    return this.recepdecservice.updateRecepdecinMongodbRecepdec();
  }
  @Put('update/mongo-to-sql')
  async updatesyncRecepdecMongotoSQL(): Promise<void> {
    return this.recepdecservice.updateRecepdecinSequelizeRecepdec();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.recepdecservice.updateRecepdecInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.recepdecservice.updateRecepdecInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.recepdecservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.recepdecservice.updateDelete('mongoose');
  }

}
