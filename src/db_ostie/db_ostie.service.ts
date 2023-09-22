import { Inject, Injectable } from '@nestjs/common';
import { AdherentService } from './service/adherent/adherent.service';
import { AffilieService } from './service/affilie/affilie.service';

@Injectable()
export class DbOstieService {
    constructor(
        private readonly adherentService:AdherentService,
        private readonly affilieService:AffilieService,
        
      ) {}
    async migrateallSqlToMongo(){
        try {
            this.adherentService.syncToMongooseAdherent();
            this.affilieService.syncToMongooseAffilie();
            return "Succes toutes les données ont été  migrés vers MongoDb pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async migrateallMongoToSql(){
        try {
            this.adherentService.syncToSequelizeAdherent();
            this.affilieService.syncToSequelizeAffilie();
            return "Succes toutes les données ont été  migrés vers MySql pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async updateMongo(){
        try {
            this.adherentService.updateAdherentinMongodbAdherent();
            this.affilieService.updateAffilieinMongodbAffilie();
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }
    async updateSql(){
        try {
            this.adherentService.updateAdherentinSequelizeAdherent();
            this.affilieService.updateAffilieinSequelizeAffilie();
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }

}
