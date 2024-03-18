import { connectToDb } from "@/utils/database";
import Item from "@/models/item";

export const POST = async (request) => {
    const requestData = await request.json();
    try {
        await connectToDb();
        const newItem = new Item({
            shopping: requestData.shoppingId, 
            description: requestData.description, 
            brand: requestData.brand, 
            expiry: requestData.expiry, 
            batchNumber: requestData.batchNumber 
        });
        await newItem.save();
        return new Response(JSON.stringify(newItem), { status: 201 });
    } catch (error) {
        return new Response("failed to add a new item to shopping list " + error, { status: 500 });
    }
}