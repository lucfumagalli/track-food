import { connectToDb } from "@/utils/database"
import Shopping from "@/models/shopping";

export const GET = async (request, { params }) => {
    try {
        await connectToDb();
        const shoppingList = await Shopping.find().populate("when");
        return new Response(JSON.stringify(shoppingList), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch password of user " + error, { status: 500 });
    }
}