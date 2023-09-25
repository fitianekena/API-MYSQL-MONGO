import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  console.log(process.env.MONGODB_URL); 
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
