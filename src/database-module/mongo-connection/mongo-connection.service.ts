import { Injectable } from '@nestjs/common';
import { Connection } from 'mongoose';

@Injectable()
export class MongoConnectionService {
    private connections: { [key: string]: Connection } = {};

  addConnection(name: string, sequelize: Connection) {
    this.connections[name] = sequelize;
  }

  getConnection(name: string): Connection | undefined {
    return this.connections[name];
  }
  getall()
  {
    return this.connections;
  }
}
