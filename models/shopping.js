import { Schema, model, models } from 'mongoose';

const ShoppingSchema = new Schema({
    where: {
        type: String,
        required: [true, 'Where the shopping have been done'],
    },
    when: {
        type: Date,
        required: [true, 'When the shopping have been done'],
    },
});
const Shopping = models.Shopping || model("Shopping", ShoppingSchema);

export default Shopping;