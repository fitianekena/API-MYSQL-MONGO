import { Controller, Get, Param } from '@nestjs/common';
import { ToSqlService } from '../toSqlService.service';
import { Model as SequelizeModel } from 'sequelize-typescript';

@Controller('mongo-to-sql')
export class MongoToSqlController < M extends  SequelizeModel>{
    constructor(
        private readonly tosqlService:ToSqlService,
        public readonly sequelizeModel: M,
    ){

    }
    @Get('/:dbname/:dbmongo/:tablename/:id')
    async migrateToSql(@Param('tablename') tablename:any,@Param('dbname') dbname:any,@Param('dbmongo') dbmongo:any,@Param('id') id:any){
        return await this.tosqlService.synctoMySql(dbname,tablename,dbmongo,id,this.sequelizeModel);
    }
}
