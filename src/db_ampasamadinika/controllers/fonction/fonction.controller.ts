import { Controller,Param,Post,Put,Delete } from '@nestjs/common';
import { FonctionService } from 'src/db_ampasamadinika/service/fonction/fonction.service';

@Controller('db_ampasamadinika/fonction')
export class FonctionController {
    constructor(
        private readonly fonctionservice:FonctionService,
    ){}
    @Post('/sql-to-mongo')
  async syncFonctionSQLtoMongo(): Promise<string> {
    return this.fonctionservice.syncToMongooseFonction();
  }
  @Post('/mongo-to-sql')
  async syncFonctionMongotoSQL(): Promise<string> {
    return this.fonctionservice.syncToSequelizeFonction();
  }
  @Put('update/sql-to-mongo')
  async updatesyncFonctionMongotoSQL(): Promise<void> {
    return this.fonctionservice.updateFonctioninMongodbFonction();
  }
  @Put('update/mongo-to-sql')
  async updatesyncFonctionSQLtoMongo(): Promise<void> {
    return this.fonctionservice.updateFonctioninSequelizeFonction();
  }
  @Put('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.fonctionservice.updateFonctionInMongoById(id);
  }
  @Put('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.fonctionservice.updateFonctionInMySqlById(id);
  }
  @Delete('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.fonctionservice.updateDelete('sequelize');
  }
  @Delete('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.fonctionservice.updateDelete('mongoose');
  }

  
}
