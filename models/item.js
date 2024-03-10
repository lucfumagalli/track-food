import { Schema, model, models } from 'mongoose';

const ItemSchema = new Schema({
    shopping: {
        type: Schema.Types.ObjectId,
        ref: 'Shopping',
        required: true
    },
    description: {
        type: String,
        required: [true, 'Item description'],
    },
    brand: {
        type: String,
        required: [true, 'item brand'],
    },
    expiryDate: {
        type: String,
        required: [true, 'When the item will expire'],
    },
    batchNumber: {
        type: String,
        required: [true, 'Batch number'],
    }
});
const Item = models.Item || model("Item", ItemSchema);

export default Item;