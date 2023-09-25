import { Test, TestingModule } from '@nestjs/testing';
import { DbOstieController } from './db_ostie.controller';

describe('DbOstieController', () => {
  let controller: DbOstieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbOstieController],
    }).compile();

    controller = module.get<DbOstieController>(DbOstieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
