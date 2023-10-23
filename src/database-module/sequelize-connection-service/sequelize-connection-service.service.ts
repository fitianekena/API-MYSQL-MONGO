import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';

@Injectable()
export class SequelizeConnectionService {
  private connections: { [key: string]: Sequelize } = {};

  addConnection(name: string, sequelize: any) {
    this.connections[name] = sequelize;
  }

  getConnection(name: string): Sequelize | undefined {
    return this.connections[name];
  }
}
