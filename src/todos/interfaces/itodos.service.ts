import { ITodo } from './todos.interface';

export interface ITodoService {
    findAll(): Promise<ITodo[]>;
    findById(ID: string): Promise<ITodo | null>;
    findOne(options: object): Promise<ITodo | null>;
    create(todo: ITodo): Promise<ITodo>;
    update(ID: string, newValue: ITodo): Promise<ITodo | null>;
    delete(ID: string): Promise<string>;
}
