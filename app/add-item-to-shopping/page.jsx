'use client'
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const AddItem = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shoppingId = searchParams.get("shoppingId");
  const [item, setItem] = useState({ description: "", brand: "", expiry: "", batchNumber: "" });
  const [submitting, setSubmitting] = useState(false);
  const [disableBatch, setDisableBatch] = useState(false);


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
          expiry: item.expiry,
          batchNumber: disableBatch ? item.expiry : item.batchNumber,
        })
      });

      if (response.ok) {
        router.push(`/${shoppingId}`);
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
          className="text-black input-form"
          required
        />
      </div>
      <div>
        <label className="label-form-text">Brand name:</label>
        <input
          value={item.brand}
          onChange={(e) => setItem({ ...item, brand: e.target.value })}
          type="text"
          className="text-black input-form"
          required
        />
      </div>
      <div>
        <label className="label-form-text">Expiry date:</label>
        <input
          value={item.expiry}
          onChange={(e) => setItem({ ...item, expiry: e.target.value })}
          type="date"
          className="text-black input-form"
          required
        />
      </div>
      <div>
        <label className="label-form-text">Batch number:</label>
        <input
          value={item.batchNumber}
          onChange={(e) => setItem({ ...item, batchNumber: e.target.value })}
          type="text"
          disabled={disableBatch}
          className="text-black input-form"
          required
        />
      </div>
      <label className="text-gray-500 ">
        <input className="mr-2 focus:text-primary-green rounded-lg" type="checkbox" onChange={(e) => setDisableBatch(e.target.checked)}/>
        <span className="text-sm">
          Batch number is the same as expiration date
        </span>
      </label>
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