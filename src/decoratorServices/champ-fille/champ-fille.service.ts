import { Injectable } from '@nestjs/common';
import { Model, modelNames } from 'mongoose';
import { CHAMP_FILLE_METADATA_KEY, ChampFilleMetadata } from 'src/decorators/champ-mere/champ-fille.decorator';
import { ClassingService } from 'src/sync-services/classing.service';

@Injectable()
export class ChampFilleService {
    constructor(
        private readonly classingService:ClassingService,
    ){}
    async getMetadatachampfille(modelMongoose:any)
    {
        const metadata: ChampFilleMetadata[] = await Reflect.getMetadata(CHAMP_FILLE_METADATA_KEY,modelMongoose);
        return metadata;
    }
    async getAllModelsWithTheSameMere(modelMongoose:any){
        const metadataprincipal= await this.getMetadatachampfille(modelMongoose);
        
        const listkeys:string[]=this.classingService.getClassNames();
        const groupedMetadata = new Map<any, ChampFilleMetadata[]>();
        for (let index = 0; index < listkeys.length; index++) {
            
            const element = await this.classingService.getClass(listkeys[index]);
            
                const metadata=await  this.getMetadatachampfille(element);
                if (metadata && metadata[0].tableMere==metadataprincipal[0].tableMere) {
                    if (!groupedMetadata.has(element)) {
                        //creer un nouvel element dans l'ensemble et instancier le tableau 
                        groupedMetadata.set(element, []);
                      }
                      //Push au sein  du tableau 
                      for (let j = 0; j < metadata.length; j++) {
                        const elementmetadata = metadata[j];
                        groupedMetadata.get(element)?.push(metadata[j]); 
                      }
                       
                    
                }

            
            
        }
        return groupedMetadata;
    }
    
}
