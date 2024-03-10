
import Shopping from "@/models/shopping";
import { connectToDb } from "@/utils/database";

export const POST = async (request) => {
    const requestData = await request.json();
    try {
        await connectToDb();

        const newShoppingList = new Shopping({
            where: requestData.where, 
            when: requestData.when,
        });

        await newShoppingList.save();
        return new Response(JSON.stringify(newShoppingList), { status: 201 });
    } catch (error) {
        return new Response("failed to add a new shopping list " + error, { status: 500 });
    }
}