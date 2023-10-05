import { InjectConnection } from "@nestjs/mongoose"
import { Connection } from "mongoose"
import { Model } from "sequelize-typescript"
import { SynchronizeToMongoose } from "./synchronizeToMongoose.service"

export class MigrateToDbGlobalService{
    constructor(
        @InjectConnection('test') private readonly connection: Connection,
        private readonly synchrotoMongooseService:SynchronizeToMongoose
    ){
       
    }
    async migrateToDbGlobal(sequelizeModel:Model){
        
        const mongomodel=await this.connection.model((sequelizeModel as any).name)
        return this.synchrotoMongooseService.synchronizeToMongoose(sequelizeModel,mongomodel);
        

    } 
    async migrateToDbGlobalMere(sequelizeModel:Model){
        try {
            const mongomodel=await this.connection.model('G'+(sequelizeModel as any).name)
            return this.synchrotoMongooseService.synchronizeToMongoose(sequelizeModel,mongomodel);
        } catch (error) {
            throw new Error("Cette table ne fait pas partie des tables meres elle ne peut donc pa seffectuer cette operation")
        }
       
        
        

    } 
}