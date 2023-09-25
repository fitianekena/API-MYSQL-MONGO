import { Controller,Param,Post,Put,Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { AdherentService } from 'src/db_ostie/service/adherent/adherent.service';

@Controller('db_ostie/adherent')
export class AdherentController extends ServicesSyncroController<AdherentService>{
    constructor(
        private readonly adherentservice:AdherentService,
    ){
      super(adherentservice)
    }

   
   
}
