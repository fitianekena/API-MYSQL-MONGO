import { Controller, Get, Param } from '@nestjs/common';
import { ToSqlService } from '../toSqlService.service';
import { Model as SequelizeModel } from 'sequelize-typescript';

@Controller('')
export class MongoToSqlController < M extends  SequelizeModel>{
    constructor(
        private readonly tosqlService:ToSqlService,
        public readonly sequelizeModel: M,
    ){

    }
    @Get('/:dbmongo/:tablename/:id')
    async migrateToSql(@Param('tablename') tablename:any,@Param('dbmongo') dbmongo:any,@Param('id') id:any){
        return await this.tosqlService.synctoMySql(tablename,dbmongo,id,this.sequelizeModel);
    }
    @Get('/:dbmongo/:tablename/')
    async migrateToSqlGlobal(@Param('tablename') tablename:any,@Param('dbmongo') dbmongo:any){
        return await this.tosqlService.syncToMysqlGlobal(tablename,dbmongo,this.sequelizeModel);
    }
}
