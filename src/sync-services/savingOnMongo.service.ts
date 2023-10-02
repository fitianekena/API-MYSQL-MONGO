import { Injectable } from "@nestjs/common";
import {  Model as MongooseModel} from "mongoose";
@Injectable()
export class SavingOnMongoService {
    async savingOnMongo(nomDuModele: string, data: any,connection): Promise<any> {
        // Vérifiez que le modèle existe dans la base de données
        if (!connection.model(nomDuModele)) {
          throw new Error("Erreur Modele introuvable "+nomDuModele);
        }
        connection.readyState;
        const model: any = connection.models[nomDuModele] as any as MongooseModel<Document>;
        const instance = new model(data);
        instance.save();
        
        return instance;
      }

}