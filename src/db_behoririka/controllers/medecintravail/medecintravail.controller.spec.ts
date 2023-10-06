import { Test, TestingModule } from '@nestjs/testing';
import { MedecinTravailController as MedecinTravailController } from './medecintravail.controller';

describe('MedecintravailController', () => {
  let controller: MedecinTravailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedecinTravailController],
    }).compile();

    controller = module.get<MedecinTravailController>(MedecinTravailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
