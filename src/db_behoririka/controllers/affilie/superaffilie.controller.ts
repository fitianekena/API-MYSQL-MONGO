import { Controller,Inject,Param,Post } from '@nestjs/common';
import { MongoToSqlController } from 'src/commons/mongo-to-sql/mongo-to-sql.controller';
import { ServicesSyncroController } from 'src/commons/servicesSyncroController.controller';
import { ToSqlService } from 'src/commons/toSqlService.service';
import { AffilieService } from 'src/db_behoririka/service/affilie/affilie.service';
import { Affilie } from 'src/db_ostie/schema/mysql/affilie.schema';


@Controller('affilie/db_behoririka/')
export class SuperAffilieController extends MongoToSqlController<any>{
    constructor(
        
        private readonly tosqlService2:ToSqlService,
        @Inject('AffilieSql') private readonly mysqlAffilie: typeof Affilie,
    ){
      super(tosqlService2,mysqlAffilie);
    }
    

  
}
