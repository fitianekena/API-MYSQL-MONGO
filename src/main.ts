import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

async function bootstrap() {
  config();
  console.log(process.env.MONGODB_URL); 
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
