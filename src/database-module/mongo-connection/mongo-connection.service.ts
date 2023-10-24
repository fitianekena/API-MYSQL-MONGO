import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class MongoConnectionService {
  constructor(
    @InjectConnection('db_24mklen') private readonly db_24mklen: Connection,
    @InjectConnection('db_ampasamadinika') private readonly db_ampasamadinika: Connection,
    @InjectConnection('db_ostie') private readonly db_ostie: Connection,
    @InjectConnection('db_tanjombato') private readonly db_tanjombato: Connection,
    @InjectConnection('ostie') private readonly ostiemongo: Connection,
    @InjectConnection('db_behoririka') private readonly db_behoririka: Connection,
    @InjectConnection('test') private readonly test: Connection,
  ){
        this.addConnection('db_24mklen',db_24mklen);
        this.addConnection('db_ampasamadinika',db_ampasamadinika);
        this.addConnection('db_behoririka',db_behoririka);
        this.addConnection('db_ostie',db_ostie);
        this.addConnection('db_tanjombato',db_tanjombato);
        this.addConnection('ostie',ostiemongo);
        this.addConnection('global_test',test);
  }
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
