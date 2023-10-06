import { Test, TestingModule } from '@nestjs/testing';
import { MedecinTravailService } from './medecintravail.service';


describe('MedecintravailService', () => {
  let service: MedecinTravailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedecinTravailService],
    }).compile();

    service = module.get<MedecinTravailService>(MedecinTravailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
