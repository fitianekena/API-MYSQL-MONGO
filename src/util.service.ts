import { Injectable } from '@nestjs/common';
import { Model } from 'sequelize';
import { Model as MongooseModel } from 'mongoose';
@Injectable()
export class UtilService {
  

 isSequelizeModel(model: any): model is Model {
  return model instanceof Model;
}

 isMongooseModel(model: any): model is MongooseModel<any> {
  return model.prototype && model.prototype instanceof MongooseModel;
}
   
 findMostSimilarString(target, stringArray) {
  let mostSimilar = '';
  let minDistance = Number.MAX_VALUE;

  for (const str of stringArray) {
    const distance = this.calculateLevenshteinDistance(target, str);
    if (distance < minDistance) {
      mostSimilar = str;
      minDistance = distance;
    }
  }

  return mostSimilar;
}

 calculateLevenshteinDistance(a, b) {
  const dp = Array(a.length + 1)
    .fill(null)
    .map(() => Array(b.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= b.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[a.length][b.length];
}



}
