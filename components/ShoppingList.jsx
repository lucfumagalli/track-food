'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import DateFormatter from "./DateFormatter";

const ShoppingList = ({ data }) => {
    const router = useRouter();

    const [date, setDate] = useState(new Date("<dd-mm-YYYY>"));

    const showItemsOfShopping = async (shoppingItem) => {
        router.push(`/${shoppingItem._id}`);
    }

    return (
        <div className="flex flex-row gap-5 flex-wrap mb-10">
            {data.map((shoppingItem) => (
                <div
                    className="card"
                    onClick={() => showItemsOfShopping(shoppingItem)}
                    key={shoppingItem._id}
                >
                    <div className="title">
                        <p className="title-text">
                            {shoppingItem.where}
                        </p>
                    </div>
                    <div className="data">
                        <p>
                            <DateFormatter
                                date={shoppingItem.when}
                            />
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}




export default ShoppingList;