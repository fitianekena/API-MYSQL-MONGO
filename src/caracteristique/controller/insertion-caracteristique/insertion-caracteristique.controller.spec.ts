import { Test, TestingModule } from '@nestjs/testing';
import { InsertionCaracteristiqueController } from './insertion-caracteristique.controller';

describe('InsertionCaracteristiqueController', () => {
  let controller: InsertionCaracteristiqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InsertionCaracteristiqueController],
    }).compile();

    controller = module.get<InsertionCaracteristiqueController>(InsertionCaracteristiqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
