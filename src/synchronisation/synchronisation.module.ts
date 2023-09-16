import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './mongodb/post.schema';
import { SequelizeModule } from '@nestjs/sequelize';
import {Post as PostSQL} from './sqlmodel/post.schema'
import { SyncController } from './controller/sync/sync.controller';
import SyncService from './service/sync/sync.service';
import sequelize from 'sequelize';



@Module({
  imports:[
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    SequelizeModule.forFeature([PostSQL]),
  ],
  providers: [SyncService,{
    provide: 'SEQUELIZE',
    useValue: sequelize, // Your Sequelize instance
  },{
    provide: 'POST_MODEL',
    useValue: PostSQL, // Your Sequelize model
  },],
  controllers:[SyncController]
})
export class SynchronisationModule {}
