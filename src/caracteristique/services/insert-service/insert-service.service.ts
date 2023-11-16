import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'sequelize';
import { Visiteaffilie } from 'src/db_behoririka/schema/mysql/visiteaffilie.schema';


@Injectable()
export class InsertServiceService {
    constructor(
        @Inject('VisiteaffilieSql')private readonly visiteaffilieService:Model
    ){}
    async getAllTheVisiteAffilie(){
        return (this.visiteaffilieService as any ).findAll();
    }
    async getTheAdAffilieIdByUsingAffilieId(idaffilie){
        // const affilieId=
    }

}
