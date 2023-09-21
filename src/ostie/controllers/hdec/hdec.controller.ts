import { Controller, Param, Post } from '@nestjs/common';
import { HdecService } from 'src/ostie/service/hdec/hdec.service';

@Controller('hdec')
export class HdecController {
    constructor(
        private readonly hdecservice:HdecService,
    ){}
//     @Post('/sql-to-mongo')
//   async syncHdecSQLtoMongo(): Promise<string> {
//     return this.hdecservice.syncToMongooseHdec();
//   }
  
//   @Post('update/sql-to-mongo')
//   async updatesyncHdecSql(): Promise<void> {
//     return this.hdecservice.updateHdecinMongodbHdec();
//   }
//   @Post('update/mongo-to-sql')
//   async updatesyncHdecMongotoSQL(): Promise<void> {
//     return this.hdecservice.updateHdecinSequelizeHdec();
//   }
//   @Post('update/sql-to-mongo/:id')
//   async updateModelsyncVisiteAffilieMongotoSQL(@Param('id') id:any): Promise<void> {
//     return this.hdecservice.updateHdecInMongoById(id);
//   }
//   @Post('update/mongo-to-sql/:id')
//   async updateModelsyncVisiteAffilieSQLtoMongo(@Param('id') id:any): Promise<void> {
//     return this.hdecservice.updateHdecInMySqlById(id);
//   }
//   @Post('update/delete/sql-to-mongo/')
//   async updateDeleteSqlToMongo(): Promise<void> {
//     return this.hdecservice.updateDelete('sequelize');
//   }
//   @Post('update/delete/mongo-to-sql/')
//   async updateDeleteMongoToSql(): Promise<void> {
//     return this.hdecservice.updateDelete('mongoose');
//   }
}
