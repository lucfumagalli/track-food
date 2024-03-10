'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const AddItem = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shoppingId = searchParams.get("shoppingId");
  const [item, setItem] = useState({ description: "", brand: "", expiryDate: "", batchNumber: "" });
  const [submitting, setSubmitting] = useState(false);

  const addShoppingList = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/item/new", {
        method: "POST",
        body: JSON.stringify({
          shoppingId: shoppingId,
          description: item.description,
          brand: item.brand,
          expiryDate: item.expiryDate,
          batchNumber: item.batchNumber,
        })
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false);
    }
  }
  return (
    <form onSubmit={addShoppingList} className="flex flex-col">
      <label>
        <span className="font-bold text-2xl">
          Product name:
        </span>
        <input
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          type="text"
          className="text-black"
          required
        />
      </label>
      <label>
        <span className="font-bold text-2xl">
          Brand name:
        </span>
        <input
          value={item.brand}
          onChange={(e) => setItem({ ...item, brand: e.target.value })}
          type="text"
          className="text-black"
          required
        />
      </label>
      <label>
        <span className="font-bold text-2xl">
          Expiry date:
        </span>
        <input
          value={item.expiryDate}
          onChange={(e) => setItem({ ...item, expiryDate: e.target.value })}
          type="date"
          className="text-black"
          required
        />
      </label>
      <label>
        <span className="font-bold text-2xl">
          Batch number:
        </span>
        <input
          value={item.batchNumber}
          onChange={(e) => setItem({ ...item, batchNumber: e.target.value })}
          type="text"
          className="text-black"
          required
        />
      </label>
      <button
        type='submit'
        disabled={submitting}
        className='green_gradient_nt h-12 px-5 ml-3 rounded-full text-white'
      >
        Add new shopping
      </button>
    </form>
  );
}

export default AddItem;