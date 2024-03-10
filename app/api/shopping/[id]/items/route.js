import { connectToDb } from "@/utils/database";
import Item from "@/models/item";

export const GET = async (request, { params }) => {
    try {
        await connectToDb();
        const items = await Item.find({shopping: params.id}).populate("shopping");
        return new Response(JSON.stringify(items), { status: 200 });
    } catch (error) {
        return new Response("Failed to fetch items of shopping list " + error, { status: 500 });
    }
}