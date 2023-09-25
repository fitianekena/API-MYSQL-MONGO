import { Test, TestingModule } from '@nestjs/testing';
import { AdherentController } from './adherent.controller';

describe('AdherentController', () => {
  let controller: AdherentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdherentController],
    }).compile();

    controller = module.get<AdherentController>(AdherentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
