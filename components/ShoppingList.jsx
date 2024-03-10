'use client'
import { useRouter } from "next/navigation";

const ShoppingList = ({ data }) => {
    const router = useRouter();

    const showItemsOfShopping = async (shoppingItem) => {
        router.push(`/${shoppingItem._id}`);
    }

    return (
        <div>
            {data.map((shoppingItem) => (
                <button 
                    onClick={() => showItemsOfShopping(shoppingItem)}
                    key={shoppingItem._id}
                >
                    <p>{shoppingItem.where}</p>
                    <p>{shoppingItem.when}</p>
                </button>
            ))}
        </div>
    )
}

export default ShoppingList;