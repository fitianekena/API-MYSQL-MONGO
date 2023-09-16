// post.model.ts

import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'posts',timestamps: false,})
export class Post extends Model {
  @Column({
    allowNull: false,
  })
  title: string;

  @Column({
    allowNull: false,
    type: 'TEXT', // Définissez le type de données TEXT
  })
  content: string;
}
