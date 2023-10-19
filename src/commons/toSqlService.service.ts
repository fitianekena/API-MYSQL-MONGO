import { Injectable } from "@nestjs/common";
import { Sequelize, Model as SequelizeModel } from 'sequelize';
import { Model as MongooseModel, Document, Connection } from 'mongoose';
import { SyncroService } from "src/syncro.service";
import { InjectConnection } from "@nestjs/mongoose";
import { SequelizeConnectionService } from "src/database-module/sequelize-connection-service/sequelize-connection-service.service";
import { UtilService } from "src/util.service";
import { ClassingService } from "src/sync-services/classing.service";
import { ChampFilleService } from "src/decoratorServices/champ-fille/champ-fille.service";

@Injectable()
export class ToSqlService  {
    constructor(
        private readonly sequelizeconnectionmodule:SequelizeConnectionService,
        private readonly utilservice:UtilService,
        private readonly classingService:ClassingService,
        private readonly champfilleservice:ChampFilleService,
    ){}
    async synctoMySql(nomdedatabase:string,nomtableprioritaire:string){
         const connection=await this.sequelizeconnectionmodule.getConnection(nomdedatabase);
         const model=await this.utilservice.findMostSimilarString(nomtableprioritaire,this.classingService.getClassNames());
         console.log(await this.champfilleservice.getMetadatachampfille(model as any));
         return this.classingService.getClass(model);
    }

}