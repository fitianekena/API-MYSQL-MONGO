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

  
}
