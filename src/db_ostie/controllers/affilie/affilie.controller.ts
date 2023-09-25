import { Controller,Param,Post, Put, Delete} from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { AffilieService } from 'src/db_ostie/service/affilie/affilie.service';

@Controller('db_ostie/affilie')
export class AffilieController extends ServicesSyncroController<AffilieService>{
    constructor(
        private readonly affilieservice:AffilieService,
    ){
      super(affilieservice)
    }

    
   
}
