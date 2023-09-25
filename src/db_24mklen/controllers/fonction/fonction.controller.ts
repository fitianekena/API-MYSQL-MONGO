import { Controller,Param,Post, Put, Delete } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { FonctionService } from 'src/db_24mklen/service/fonction/fonction.service';

@Controller('db_24mklen/fonction')
export class FonctionController extends ServicesSyncroController<FonctionService>{
    constructor(
        private readonly fonctionservice:FonctionService,
    ){
      super(fonctionservice)
    }
    

  
}
