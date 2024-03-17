'use client'

import { useEffect, useState } from "react";
import ProductsList from "@/components/ProductsList";
import Link from "next/link";

const ItemsList = ({ params }) => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductsList = async () => {
          const response = await fetch(`/api/shopping/${params.id}/items`);
          const data = await response.json();
          setItems(data);
          setLoading(false);
        };
        fetchProductsList();
    }, []);

    if (loading) {
        return (
        <div className="relative flex w-64 animate-pulse gap-2 p-4">
            <div className="min-w-40 min-h-24 rounded-2xl bg-slate-300"></div>
        </div>
        )
    }
    return (
        <section className="w-full">
            <ProductsList
                data={items}
            />
            <Link
                href={`add-item-to-shopping?shoppingId=${params.id}`}
                className="black_btn mx-auto"
            >
                Add new item   
            </Link>
        </section>
    )
}

export default ItemsList;