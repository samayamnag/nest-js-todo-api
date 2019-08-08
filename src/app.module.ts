import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';

const configService = new ConfigService(`.env`);

@Module({
  imports: [
    MongooseModule.forRoot(configService.mongoURI, { useNewUrlParser: true }),
    ConfigModule,
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
