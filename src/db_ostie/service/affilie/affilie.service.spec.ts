import { Test, TestingModule } from '@nestjs/testing';
import { AffilieService } from './affilie.service';

describe('AffilieService', () => {
  let service: AffilieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AffilieService],
    }).compile();

    service = module.get<AffilieService>(AffilieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
