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
        <form onSubmit={addShoppingList} className="flex flex-col">
            <label>
                <span className="font-bold text-2xl">
                    When did you get shopping?
                </span>
                <input
                    value={shopping.when}
                    onChange={(e) => setShopping({ ...shopping, when: e.target.value })}
                    type="date"
                    className="text-black"
                    required
                />
            </label>
            <label>
                <span className="font-bold text-2xl">
                    Where did you get shopping?
                </span>
                <input
                    value={shopping.where}
                    onChange={(e) => setShopping({ ...shopping, where: e.target.value })}
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
