import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
    imports:[MongooseModule.forRoot('mongodb://127.0.0.1:27017/ostie'),
    SequelizeModule.forRoot({
    dialect: 'mysql', 
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ostie',
    models: [], // Vous pouvez ajuster cette option en fonction de vos besoins
     }),
    MongooseModule.forFeature([])]
})
export class OstieModule {

}
