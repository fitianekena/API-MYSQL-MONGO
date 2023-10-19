import { Controller, Get, Param } from '@nestjs/common';
import { ToSqlService } from '../toSqlService.service';

@Controller('mongo-to-sql')
export class MongoToSqlController {
    constructor(
        private readonly tosqlService:ToSqlService,
    ){

    }
    @Get('/:dbname/:tablename')
    async migrateToSql(@Param('tablename') tablename:any,@Param('dbname') dbname:any){
        console.log(await this.tosqlService.synctoMySql(dbname,tablename));
    }
}
