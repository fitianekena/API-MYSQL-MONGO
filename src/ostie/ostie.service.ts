import { Inject, Injectable } from '@nestjs/common';
import { ActiviteService } from './service/activite/activite.service';
import { AdherentService } from './service/adherent/adherent.service';
import { CarnetService } from './service/carnet/carnet.service';
import { CentreService } from './service/centre/centre.service';
import { DetReglService } from './service/det_regl/det_regl.service';
import { EcheanceService } from './service/echeance/echeance.service';
import { EcritureService } from './service/ecriture/ecriture.service';
import { HdecService } from './service/hdec/hdec.service';
import { RecepdecService } from './service/recepdec/recepdec.service';
import { Reglemt } from './schema/mongodb/reglemt.schema';
import { ReglemtService } from './service/reglemt/reglemt.service';
import { StatutService } from './service/statut/statut.service';


@Injectable()
export class OstieService {
    constructor(
        private readonly activiteService:ActiviteService,
        private readonly adherentService:AdherentService,
        private readonly carnetService:CarnetService,
        private readonly centreService:CentreService,
        private readonly det_reglService:DetReglService,
        private readonly echeanceService:EcheanceService,
        private readonly ecritureService:EcritureService,
        private readonly hdecService:HdecService,
        private readonly recepdecService:RecepdecService,
        private readonly reglemtService:ReglemtService,
        private readonly statusService:StatutService,

        
      ) {}
    async migrateallSqlToMongo(){
        try {
            this.centreService.synchronizeToMongoose();
            this.activiteService.synchronizeToMongoose();
            this.det_reglService.synchronizeToMongoose();
            this.echeanceService.synchronizeToMongoose();
            this.ecritureService.synchronizeToMongoose();
            this.adherentService.synchronizeToMongoose();
            this.carnetService.synchronizeToMongoose();
            this.hdecService.synchronizeToMongoose();
            this.recepdecService.synchronizeToMongoose();
            this.reglemtService.synchronizeToMongoose();
            this.statusService.synchronizeToMongoose();
            return "Succes toutes les données ont été  migrés vers MongoDb pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async migrateallMongoToSql(){
        try {
            this.centreService.synchronizeToSequelize();
            this.activiteService.synchronizeToSequelize();
            this.det_reglService.synchronizeToSequelize();
            this.echeanceService.synchronizeToSequelize();
            this.ecritureService.synchronizeToSequelize();
            this.adherentService.synchronizeToSequelize();
            this.carnetService.synchronizeToSequelize();
            this.hdecService.synchronizeToSequelize();
            this.recepdecService.synchronizeToSequelize();
            this.reglemtService.synchronizeToSequelize();
            this.statusService.synchronizeToSequelize();
            return "Succes toutes les données ont été  migrés vers MySql pour cette database";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
        
        
    }
    async updateMongo(){
        try {
            this.centreService.updateMongo();
            this.activiteService.updateMongo();
            this.det_reglService.updateMongo();
            this.echeanceService.updateMongo();
            this.ecritureService.updateMongo();
            this.adherentService.updateMongo();
            this.carnetService.updateMongo();
            this.hdecService.updateMongo();
            this.recepdecService.updateMongo();
            this.reglemtService.updateMongo();
            this.statusService.updateMongo();
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }
    async updateSql(){
        try {
            this.centreService.updateSql();
            this.activiteService.updateSql();
            this.det_reglService.updateSql();
            this.echeanceService.updateSql();
            this.ecritureService.updateSql();
            this.adherentService.updateSql();
            this.carnetService.updateSql();
            this.hdecService.updateSql();
            this.recepdecService.updateSql();
            this.reglemtService.updateSql();
            this.statusService.updateSql();
            return "Succes  cette database est maintenant à jour et dispose des données manquants. ";
        } catch (error) {
            return "Une erreur est survenue:"+error;
        }
    }

}
