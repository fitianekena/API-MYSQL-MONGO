import { Injectable, Type } from '@nestjs/common';
import * as glob from 'glob';

import * as path from 'path';

@Injectable()
export class ClassLoaderService {
    findClassByClassName<T>(className: string, namespace: any): Type<T> | undefined {
        // Recherche la classe par son nom dans le namespace
        const targetClass = namespace[className];
    
        if (targetClass) {
          return targetClass;
        }
    
        return undefined; // La classe n'a pas été trouvée
      }
      findClassInDirectory<T>(directoryPath: string, className: string): Type<T> | undefined {
        const pattern = path.join(directoryPath, '**/*.ts'); // Motif de recherche récursif pour les fichiers TypeScript
        const files = glob.sync(pattern);
      
        for (const file of files) {
          try {
            const fileContent = require(file);
            const classConstructor = fileContent.default || fileContent[className];
      
            if (classConstructor) {
              return classConstructor;
            }
          } catch (error) {
            // Gérer les erreurs de chargement de fichier ou d'accès aux classes
            console.error(`Erreur lors de la recherche de ${className} dans ${file}: ${error}`);
          }
        }
      
        return undefined; // La classe n'a pas été trouvée dans les fichiers du répertoire et de ses sous-dossiers
      }
}
