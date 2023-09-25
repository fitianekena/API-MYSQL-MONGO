import { Controller,Param,Post } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { CentreService } from 'src/db_ampasamadinika/service/centre/centre.service';


@Controller('db_ampasamadinika/centre')
export class CentreController extends ServicesSyncroController<CentreService>{
    constructor(
        private readonly centreservice:CentreService,
    ){
      super(centreservice);
    }
    

  
}
