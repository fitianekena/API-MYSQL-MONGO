import { Test, TestingModule } from '@nestjs/testing';
import { MongoToSqlController } from './mongo-to-sql.controller';

describe('MongoToSqlController', () => {
  let controller: MongoToSqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MongoToSqlController],
    }).compile();

    controller = module.get<MongoToSqlController>(MongoToSqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
