'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const AddItem = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shoppingId = searchParams.get("shoppingId");
  const [item, setItem] = useState({ description: "", brand: "", expiryDate: "", batchNumber: "" });
  const [submitting, setSubmitting] = useState(false);

  const addItemToShoppingList = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch("/api/item/new", {
        method: "POST",
        body: JSON.stringify({
          shoppingId: shoppingId,
          description: item.description,
          brand: item.brand,
          expiryDate: item.expiryDate.split("-").reverse().join("/"),
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
    <form onSubmit={addItemToShoppingList} className="form">
      <div>
        <label className="label-form-text">Product name:</label>
        <input
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
          type="text"
          className="text-black"
          required
        />
      </div>
      <div>
        <label className="label-form-text">Brand name:</label>
        <input
          value={item.brand}
          onChange={(e) => setItem({ ...item, brand: e.target.value })}
          type="text"
          className="text-black"
          required
        />
      </div>
      <div>
        <label className="label-form-text">Expiry date:</label>
        <input
          value={item.expiryDate}
          onChange={(e) => setItem({ ...item, expiryDate: e.target.value })}
          type="date"
          className="text-black"
          required
        />
      </div>
      <div>
        <label className="label-form-text">Batch number:</label>
        <input
          value={item.batchNumber}
          onChange={(e) => setItem({ ...item, batchNumber: e.target.value })}
          type="text"
          className="text-black"
          required
        />
      </div>
      <button
        type='submit'
        disabled={submitting}
        className='black_btn'
      >
        Add new item to list
      </button>
    </form>
  );
}

export default AddItem;