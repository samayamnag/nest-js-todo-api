import { Document } from 'mongoose';

export interface ITodo extends Document {
    readonly text: string;
    readonly completed: boolean;
    readonly created: Date;
}
