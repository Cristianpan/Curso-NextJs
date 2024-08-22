'use client'
import { useState } from "react";

export const CartCounter = () => {
    const [count, setCount] = useState<number>(0);

  const handleIncrement = (value: number) => {
    setCount(count + value);
  };
  const handleDecrement = (value: number) => {
    if (count > 0) {
      setCount(count + value);
    }
  };
  return (
    <>
     <p className="text-9xl">{count}</p>
      <div className="flex gap-2 mt-10">
        <button
          className="px-8 py-2 bg-black text-white rounded hover:bg-gray-600 transition-colors"
          onClick={() => handleDecrement(-1)}
        >
          -1
        </button>
        <button
          className="px-8 py-2 bg-black text-white rounded hover:bg-gray-600 transition-colors"
          onClick={() => handleIncrement(1)}
        >
          +1
        </button>
      </div>
    </>
  )
}
