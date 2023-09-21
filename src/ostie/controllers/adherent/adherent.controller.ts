import { Controller, Param, Post } from '@nestjs/common';
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
  
  @Post('update/sql-to-mongo')
  async updatesyncAdherentSql(): Promise<void> {
    return this.adherentservice.updateAdherentinMongodbAdherent();
  }
  @Post('update/mongo-to-sql')
  async updatesyncAdherentMongotoSQL(): Promise<void> {
    return this.adherentservice.updateAdherentinSequelizeAdherent();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.adherentservice.updateAdherentInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.adherentservice.updateAdherentInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.adherentservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.adherentservice.updateDelete('mongoose');
  }

}
