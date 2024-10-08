"use client";
import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const { count } = useAppSelector((store) => store.counter);
  return (
    <div className="flex flex-wrap p-2">
      <SimpleWidget
        title={count.toString()}
        subtitle="productos agregados"
        label="Contador"
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href="/dashboard/counter"
      />
    </div>
  );
};
