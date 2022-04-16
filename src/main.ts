import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
   /* Creates a nest application for monolithic servers */
  const app = await NestFactory.create(AppModule, { logger: false });
  
  // validation is done through Nestjs pipes. 
    // Nestjs Pipes run before a specified request (kinda like middlewre)
    /* Enabling Validation pipe globally.
       Thoough it can be done in module level too*/

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
