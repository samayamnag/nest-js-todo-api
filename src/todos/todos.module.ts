import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Todo',
      schema: TodoSchema,
    }]),
  ],
  providers: [TodosService],
  controllers: [TodosController],
})
export class TodosModule { }
