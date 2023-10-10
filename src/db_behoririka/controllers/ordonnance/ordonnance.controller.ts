import { Controller,Param,Post } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { OrdonnanceService } from 'src/db_behoririka/service/ordonnance/ordonnance.service';


@Controller('db_behoririka/ordonnance')
export class OrdonnanceController extends ServicesSyncroController<OrdonnanceService>{
    constructor(
        private readonly ordonnanceservice:OrdonnanceService,
    ){
      super(ordonnanceservice);
    }
    

  
}
