'use client';

import { useState, useEffect } from "react";
import ShoppingList from "@/components/ShoppingList";
import Link from "next/link";

export default function Home() {
  const [myShopping, setMyShopping] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShoppingList = async () => {
      const response = await fetch('/api/shopping/list');
      const data = await response.json();
      setMyShopping(data);
      setLoading(false);
    };
    fetchShoppingList();
  }, []);

  if (loading) {
    return (
      <div class="relative flex w-64 animate-pulse gap-2 p-4">
        <div class="min-w-40 min-h-24 rounded-2xl bg-slate-300"></div>
      </div>
    )
  }
  if (myShopping.length > 0) {
    return (
      <section className="w-full">
        <ShoppingList
          data={myShopping}
        />
        <Link
          href="/add-shopping-list"
          className='black_btn mx-auto'
        >
          Add new shopping list
        </Link>
      </section>
    );
  }
  return (
    <section className="w-full">
      <Link
        href="/add-shopping-list"
        className='black_btn mx-auto'
      >
        Add your first shopping list
      </Link>
    </section>
  );

}
