import { CartCounter } from "@/app/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping cart",
  description: "A simple counter",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <h3>Productos en el carrito de compras</h3>
      <CartCounter />
    </div>
  );
}
