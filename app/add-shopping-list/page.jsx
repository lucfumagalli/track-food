'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddShoppingList() {
    const router = useRouter();
    const [shopping, setShopping] = useState({ where: "", when: "" });
    const [submitting, setSubmitting] = useState(false);
    
    const addShoppingList = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch("/api/shopping/new", {
                method: "POST",
                body: JSON.stringify({
                    when: shopping.when,
                    where: shopping.where
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
        <form onSubmit={addShoppingList} className="form">
            <div>
                <label className="label-form-text">When did you get shopping?</label>
                <input
                    value={shopping.when}
                    onChange={(e) => setShopping({ ...shopping, when: e.target.value })}
                    type="date"
                    className="text-black input-form"
                    required
                />
            </div>
            <div>
                <label className="label-form-text">Where did you get shopping?</label>
                <input
                    value={shopping.where}
                    onChange={(e) => setShopping({ ...shopping, where: e.target.value })}
                    type="text"
                    className="text-black input-form"
                    placeholder="Esselunga, Conad, ..."
                    required
                />
            </div>
            <button
                type='submit'
                disabled={submitting}
                className='black_btn'
            >
                Add new shopping list
            </button>
        </form>
    );
}
