import { Controller,Param,Post } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { VaccinCovidService } from 'src/db_behoririka/service/vaccin-covid/vaccin-covid.service';


@Controller('db_behoririka/vaccinCovid')
export class VaccinCovidController extends ServicesSyncroController<VaccinCovidService>{
    constructor(
        private readonly vaccinCovidservice:VaccinCovidService,
    ){
      super(vaccinCovidservice);
    }
    

  
}
