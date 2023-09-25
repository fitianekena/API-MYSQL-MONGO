import { Controller, Param, Post, Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { AdherentService } from 'src/ostie/service/adherent/adherent.service';

@Controller('ostie/adherent')
export class AdherentController extends ServicesSyncroController<AdherentService>{
    constructor(
        private readonly adherentservice:AdherentService,
    ){
      super(adherentservice);
    }
   

}
