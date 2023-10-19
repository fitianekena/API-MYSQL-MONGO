import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CHAMP_FILLE_METADATA_KEY, ChampFilleMetadata } from 'src/decorators/champ-mere/champ-fille.decorator';

@Injectable()
export class ChampFilleService {
    async getMetadatachampfille(modelMongoose:any)
    {
        const metadata: ChampFilleMetadata[] = await Reflect.getMetadata(CHAMP_FILLE_METADATA_KEY,modelMongoose);

        return metadata;
    }
}
