import { Test, TestingModule } from '@nestjs/testing';
import { InsertServiceService } from './insert-service.service';

describe('InsertServiceService', () => {
  let service: InsertServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InsertServiceService],
    }).compile();

    service = module.get<InsertServiceService>(InsertServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
