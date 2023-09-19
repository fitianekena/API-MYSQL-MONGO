import { Test, TestingModule } from '@nestjs/testing';
import { SyncDbAmpasamadinikaController } from './db_ampasamadinika.controller';

describe('DbAmpasamadinikaController', () => {
  let controller: SyncDbAmpasamadinikaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyncDbAmpasamadinikaController],
    }).compile();

    controller = module.get<SyncDbAmpasamadinikaController>(SyncDbAmpasamadinikaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
