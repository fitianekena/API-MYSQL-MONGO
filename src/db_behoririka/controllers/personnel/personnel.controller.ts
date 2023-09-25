import { Controller,Param,Post, Put,Delete} from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { FonctionService } from 'src/db_behoririka/service/fonction/fonction.service';
import { PersonnelService } from 'src/db_behoririka/service/personnel/personnel.service';

@Controller('db_behoririka/personnel')
export class PersonnelController extends ServicesSyncroController<PersonnelService>{
    constructor(
        private readonly personnelservice:PersonnelService,
    ){
      super(personnelservice)
    }

    
  
}
