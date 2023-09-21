import { Controller,Param,Post } from '@nestjs/common';
import { FonctionService } from 'src/db_ampasamadinika/service/fonction/fonction.service';

@Controller('db-ampasamadinika/fonction')
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
  @Post('update/sql-to-mongo')
  async updatesyncFonctionMongotoSQL(): Promise<void> {
    return this.fonctionservice.updateFonctioninMongodbFonction();
  }
  @Post('update/mongo-to-sql')
  async updatesyncFonctionSQLtoMongo(): Promise<void> {
    return this.fonctionservice.updateFonctioninSequelizeFonction();
  }
  @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.fonctionservice.updateFonctionInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.fonctionservice.updateFonctionInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.fonctionservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.fonctionservice.updateDelete('mongoose');
  }

  
}
