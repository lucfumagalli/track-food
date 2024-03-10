'use client'

import { useEffect, useState } from "react";
import ProductsList from "@/components/ProductsList";

const ItemsList = ({ params }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchProductsList = async () => {
          const response = await fetch(`/api/shopping/${params.id}/items`);
          const data = await response.json();
          setItems(data);
        };
        fetchProductsList();
    }, []);
    
    return (
        <>
            <ProductsList
                data={items}
            />
            <a href={`add-item-to-shopping?shoppingId=${params.id}`}>
                <button> Add new item </button>   
            </a>
        </>
    )
}

export default ItemsList;