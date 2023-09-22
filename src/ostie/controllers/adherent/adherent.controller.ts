import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { AdherentService } from 'src/ostie/service/adherent/adherent.service';

@Controller('ostie/adherent')
export class AdherentController {
    constructor(
        private readonly adherentservice:AdherentService,
    ){}
    @Post('/sql-to-mongo')
  async syncAdherentSQLtoMongo(): Promise<string> {
    return this.adherentservice.syncToMongooseAdherent();
  }
  @Post('/mongo-to-sql')
  async syncAdherentMongotoSQL(): Promise<string> {
    return this.adherentservice.syncToSequelizeAdherent();
  }
  
  @Put('update/sql-to-mongo')
  async updatesyncAdherentSql(): Promise<void> {
    return this.adherentservice.updateAdherentinMongodbAdherent();
  }
  @Put('update/mongo-to-sql')
  async updatesyncAdherentMongotoSQL(): Promise<void> {
    return this.adherentservice.updateAdherentinSequelizeAdherent();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.adherentservice.updateAdherentInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.adherentservice.updateAdherentInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.adherentservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.adherentservice.updateDelete('mongoose');
  }

}
