import { Controller,Param,Post } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { AffilieService } from 'src/db_behoririka/service/affilie/affilie.service';


@Controller('db_behoririka/affilie')
export class AffilieController extends ServicesSyncroController<AffilieService>{
    constructor(
        private readonly affilieservice:AffilieService,
    ){
      super(affilieservice);
    }
    

  
}
