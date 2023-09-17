import { Test, TestingModule } from '@nestjs/testing';
import { SyncDbOstieController } from './sync_db_ostie.controller';

describe('SyncDbOstieController', () => {
  let controller: SyncDbOstieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyncDbOstieController],
    }).compile();

    controller = module.get<SyncDbOstieController>(SyncDbOstieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
