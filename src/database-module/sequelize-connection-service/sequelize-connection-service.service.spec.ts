import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeConnectionService } from './sequelize-connection-service.service';

describe('SequelizeConnectionServiceService', () => {
  let service: SequelizeConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SequelizeConnectionService],
    }).compile();

    service = module.get<SequelizeConnectionService>(SequelizeConnectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
