import { Controller,Param,Post, Put, Delete} from '@nestjs/common';
import { AffilieService } from 'src/db_ostie/service/affilie/affilie.service';

@Controller('db_ostie/affilie')
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
    @Put('update/sql-to-mongo')
    async updatesyncAffilieMongotoSQL(): Promise<void> {
      return this.affilieservice.updateAffilieinMongodbAffilie();
    }
    @Put('update/mongo-to-sql')
    async updatesyncAffilieSQLtoMongo(): Promise<void> {
      return this.affilieservice.updateAffilieinSequelizeAffilie();
    }
    @Put('update/sql-to-mongo/:id')
    async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
      return this.affilieservice.updateAffilieInMongoById(id);
    }
    @Put('update/mongo-to-sql/:id')
    async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
      return this.affilieservice.updateAffilieInMySqlById(id);
    }
    @Delete('update/delete/sql-to-mongo/')
    async updateDeleteSqlToMongo(): Promise<void> {
      return this.affilieservice.updateDelete('sequelize');
    }
    @Delete('update/delete/mongo-to-sql/')
    async updateDeleteMongoToSql(): Promise<void> {
      return this.affilieservice.updateDelete('mongoose');
    }
   
}
