import { Injectable, NotFoundException, Type } from '@nestjs/common';
import * as glob from 'glob';
import * as fs from 'fs';
import * as path from 'path';
import { Project, ClassDeclaration, ConstructorDeclaration } from 'ts-morph';
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
  async loadClass(folderPath: string, className: string) {
    try {
      const files = fs.readdirSync(folderPath);

      for (const file of files) {
        const filePath = path.join(folderPath, file);

        const stats = fs.statSync(filePath);
        console.log("bisous")
        if (stats.isFile() && filePath.endsWith('.ts')) {
          // If it's a TypeScript file, try to load the class.
          try {
            const fileContent = await fs.readFileSync(filePath, 'utf8');

            const project = new Project({
              tsConfigFilePath: './tsconfig.json',
              // Spécifiez le chemin de votre tsconfig.json.
            },); // Ensure your Project configuration is set up correctly.
            let sourceFile: any;
            if (!project.getSourceFile(filePath)) {
              // Le fichier n'existe pas encore dans le projet, donc nous pouvons l'ajouter.
              sourceFile = project.createSourceFile(filePath, fileContent);
            } else {
              sourceFile = project.getSourceFile(filePath)
            }

            const classNode = sourceFile.getClass(className);

            if (classNode) {
                // Obtenez le constructeur de la classe
                const constructor: ConstructorDeclaration | undefined = await classNode.getConstructors()[0];

                if (constructor) {
                  // Vous avez maintenant l'objet constructeur
                  console.log(constructor.getText());
                  return constructor; // C'est l'objet constructeur lui-même
                } else {
                  console.log(`La classe n'a pas de constructeur.`);
                }
              

              return constructor; // Return the class code as a string.
            }
          } catch (error) {
            throw new Error(error)
          }
        }
      }

      return null; // The class was not found in this folder.
    } catch (error) {
      throw new NotFoundException(`An error occurred while reading the folder: ${error.message}`);
    }
  }
}
