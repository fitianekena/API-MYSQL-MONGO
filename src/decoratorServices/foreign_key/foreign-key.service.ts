import { Injectable } from '@nestjs/common';
import { Model as MongooseModel} from 'mongoose';
import { FOREIGNKEYDATA, ForeignKeydata } from 'src/decorators/champ-mere/foreign-key.decorator';
@Injectable()
export class ForeignKeyService {

     async getAllForeignKeysInAModel(model:any){
        const metadata: ForeignKeydata[] = await Reflect.getMetadata(FOREIGNKEYDATA,model);
        
        return metadata;
     }
     
    
}
