'use client';

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ShoppingList from "@/components/ShoppingList";

export default function Home() {
  const [myShopping, setMyShopping] = useState([]);

  useEffect(() => {
    const fetchShoppingList = async () => {
      const response = await fetch('/api/shopping/list');
      const data = await response.json();
      setMyShopping(data);
    };
    fetchShoppingList();
  }, []);


  return (
    <section>
      <a href="add-shopping-list">Add</a>

      <div className='text-white'>
        <ShoppingList
          data={myShopping}
        />
      </div>
    </section>
  );
}
