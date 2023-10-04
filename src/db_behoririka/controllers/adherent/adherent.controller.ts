import { Controller,Param,Post } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { AdherentService } from 'src/db_behoririka/service/adherent/adherent.service';


@Controller('db_behoririka/adherent')
export class AdherentController extends ServicesSyncroController<AdherentService>{
    constructor(
        private readonly adherentservice:AdherentService,
    ){
      super(adherentservice);
    }
    

  
}
