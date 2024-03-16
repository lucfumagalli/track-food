'use client'
import { useRouter } from "next/navigation";

const ShoppingList = ({ data }) => {
    const router = useRouter();

    const showItemsOfShopping = async (shoppingItem) => {
        router.push(`/${shoppingItem._id}`);
    }

    return (
        <div className="flex flex-row gap-5 flex-wrap mb-10">
            {data.map((shoppingItem) => (
                <div 
                    class="card"
                    onClick={() => showItemsOfShopping(shoppingItem)}
                    key={shoppingItem._id}
                >
                    <div class="title">
                        <p class="title-text">
                            {shoppingItem.where}
                        </p>
                    </div>
                    <div class="data">
                        <p>
                            {shoppingItem.when}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}




export default ShoppingList;