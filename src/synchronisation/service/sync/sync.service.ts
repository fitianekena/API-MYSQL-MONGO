
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sequelize } from 'sequelize';
import { Post as SequelizePost } from 'src/synchronisation/sqlmodel/post.schema';
import { Post as MongoosePost } from 'src/synchronisation/mongodb/post.schema';

@Injectable()
export default class SyncService {
  constructor(
    @InjectModel('Post') private readonly mongoosePostModel: Model<MongoosePost>,
    @Inject('SEQUELIZE')private readonly sequelize: Sequelize,
    @Inject('POST_MODEL') private readonly postModel: typeof SequelizePost,
  ) {}

  async syncData(): Promise<string> {
    try {
      // Récupérez les données de Sequelize
      const sequelizePosts = await SequelizePost.findAll();

      // Mappez les données de Sequelize vers Mongoose
      const mongoosePosts = sequelizePosts.map((sequelizePost) => ({
        title: sequelizePost.title,
        content: sequelizePost.content,
      }));

      // Insérez les données dans MongoDB (Mongoose)
      await this.mongoosePostModel.insertMany(mongoosePosts);

      return 'Données synchronisées avec succès !';
    } catch (error) {
      console.error('Erreur lors de la synchronisation :', error);
      throw error;
    }
  }
}
