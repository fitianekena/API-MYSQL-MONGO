import { Test, TestingModule } from '@nestjs/testing';
import { DetReglController } from './det_regl.controller';

describe('DetReglController', () => {
  let controller: DetReglController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetReglController],
    }).compile();

    controller = module.get<DetReglController>(DetReglController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
