import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SynchronisationModule } from './synchronisation/synchronisation.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from './synchronisation/sqlmodel/post.schema';

@Module({
  imports:[
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/testtransfert'),
    SequelizeModule.forRoot({
    dialect: 'mysql', // Remplacez par le dialecte de votre base de données
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'testtransfert',
    models: [Post], // Vous pouvez ajuster cette option en fonction de vos besoins
  }),SynchronisationModule],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
