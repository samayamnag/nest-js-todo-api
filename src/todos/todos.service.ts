import { Injectable } from '@nestjs/common';
import { ITodoService, ITodo } from './interfaces/index';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateTodoDto } from './dto/createTodo.dto';
import { debug } from 'console';

@Injectable()
export class TodosService implements ITodoService {
    constructor(@InjectModel('Todo') private readonly todoModel: Model<ITodo>) { }

    async findAll(): Promise<ITodo[]> {
        return await this.todoModel.find().exec();
    }

    async findById(ID: string): Promise<ITodo> {
        return await this.todoModel.findById(Types.ObjectId(ID)).exec();
    }

    async findOne(options: object): Promise<ITodo | null> {
        return await this.todoModel.findOne(options).exec();
    }

    async create(createTodo: CreateTodoDto): Promise<ITodo> {
        const createdTodo = new this.todoModel(createTodo);
        return await createdTodo.save();
    }

    async update(ID: string, newValue: ITodo): Promise<ITodo> {
        const todo = await this.todoModel.findById(Types.ObjectId(ID)).exec();

        if (!todo._id) {
            debug('todo not found');
        }

        await this.todoModel.findByIdAndUpdate(ID, newValue).exec();
        return await this.todoModel.findById(ID).exec();
    }

    async delete(ID: string): Promise<string> {
        try {
            await this.todoModel.findByIdAndRemove(ID).exec();
            return 'The todo has been deleted';
        } catch (err) {
            debug(err);
            return 'The todo could not be deleted';
        }
    }
}
