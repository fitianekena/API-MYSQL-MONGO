import { Controller,Param,Post } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { MedecinTravailService } from 'src/db_behoririka/service/medecintravail/medecintravail.service';



@Controller('db_behoririka/medecinTravail')
export class MedecinTravailController extends ServicesSyncroController<MedecinTravailService>{
    constructor(
        private readonly medecinTravailservice:MedecinTravailService,
    ){
      super(medecinTravailservice);
    }  
}
