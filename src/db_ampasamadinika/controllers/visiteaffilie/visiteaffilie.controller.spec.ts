import { Test, TestingModule } from '@nestjs/testing';
import { VisiteAffilieController } from './visiteaffilie.controller';

describe('VisiteAffilieController', () => {
  let controller: VisiteAffilieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisiteAffilieController],
    }).compile();

    controller = module.get<VisiteAffilieController>(VisiteAffilieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
