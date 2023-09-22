import { Controller,Param,Post} from '@nestjs/common';
import { AffilieService } from 'src/db_ostie/service/affilie/affilie.service';

@Controller('db-ostie/affilie')
export class AffilieController {
    constructor(
        private readonly affilieservice:AffilieService,
    ){}

    @Post('/sql-to-mongo')
    async syncAffilieSQLtoMongo(): Promise<string> {
      return this.affilieservice.syncToMongooseAffilie();
    }
    @Post('/mongo-to-sql')
    async syncAffilieMongotoSQL(): Promise<string> {
      return this.affilieservice.syncToSequelizeAffilie();
    }
    @Post('update/sql-to-mongo')
    async updatesyncAffilieMongotoSQL(): Promise<void> {
      return this.affilieservice.updateAffilieinMongodbAffilie();
    }
    @Post('update/mongo-to-sql')
    async updatesyncAffilieSQLtoMongo(): Promise<void> {
      return this.affilieservice.updateAffilieinSequelizeAffilie();
    }
    @Post('update/sql-to-mongo/:id')
  async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
    return this.affilieservice.updateAffilieInMongoById(id);
  }
  @Post('update/mongo-to-sql/:id')
  async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
    return this.affilieservice.updateAffilieInMySqlById(id);
  }
  @Post('update/delete/sql-to-mongo/')
  async updateDeleteSqlToMongo(): Promise<void> {
    return this.affilieservice.updateDelete('sequelize');
  }
  @Post('update/delete/mongo-to-sql/')
  async updateDeleteMongoToSql(): Promise<void> {
    return this.affilieservice.updateDelete('mongoose');
  }
   
}
