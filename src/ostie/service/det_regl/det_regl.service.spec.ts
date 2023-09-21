import { Test, TestingModule } from '@nestjs/testing';
import { DetReglService } from './det_regl.service';

describe('DetReglService', () => {
  let service: DetReglService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetReglService],
    }).compile();

    service = module.get<DetReglService>(DetReglService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
