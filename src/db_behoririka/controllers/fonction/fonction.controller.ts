import { Controller,Param,Post, Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { FonctionService } from 'src/db_behoririka/service/fonction/fonction.service';

@Controller('db_behoririka/fonction')
export class FonctionController extends ServicesSyncroController<FonctionService>{
    constructor(
        private readonly fonctionservice:FonctionService,
    ){
      super(fonctionservice)
    }
    

  
}
