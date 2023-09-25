import { Controller,Param,Post } from '@nestjs/common';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { CentreService } from 'src/db_behoririka/service/centre/centre.service';


@Controller('db-behoririka/centre')
export class CentreController extends ServicesSyncroController<CentreService>{
    

  
}
