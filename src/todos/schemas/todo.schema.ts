import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
    text: String,
    completed: Boolean,
    created: {
        type: Date,
        default: Date.now,
    },
});
