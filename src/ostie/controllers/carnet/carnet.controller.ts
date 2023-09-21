import { Controller, Param, Post } from '@nestjs/common';
import { CarnetService } from 'src/ostie/service/carnet/carnet.service';

@Controller('ostie/carnet')
export class CarnetController {
    constructor(
        private readonly carnetservice:CarnetService,
    ){}
    @Post('/sql-to-mongo')
  async syncCarnetSQLtoMongo(): Promise<string> {
    return this.carnetservice.syncToMongooseCarnet();
  }
  
  @Post('update/sql-to-mongo')
  async updatesyncCarnetSql(): Promise<void> {
    return this.carnetservice.updateCarnetinMongodbCarnet();
  }
  @Post('update/mongo-to-sql')
  async updatesyncCarnetMongotoSQL(): Promise<void> {
    return this.carnetservice.updateCarnetinSequelizeCarnet();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.carnetservice.updateCarnetInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.carnetservice.updateCarnetInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.carnetservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.carnetservice.updateDelete('mongoose');
  }

}
