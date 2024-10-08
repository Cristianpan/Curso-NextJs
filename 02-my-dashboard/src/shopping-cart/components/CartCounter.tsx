"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CartCounterProps {
  value: number;
}

interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((response) => response.json());

  return data;
};

export const CartCounter = ({ value }: CartCounterProps) => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const handleAddOne = () => {
    dispatch(addOne());
  };
  const handleSubstractOne = () => {
    dispatch(substractOne());
  };

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <p className="text-9xl">{count}</p>
      <div className="flex gap-2 mt-10">
        <button
          className="px-8 py-2 bg-black text-white rounded hover:bg-gray-600 transition-colors"
          onClick={handleSubstractOne}
        >
          -1
        </button>
        <button
          className="px-8 py-2 bg-black text-white rounded hover:bg-gray-600 transition-colors"
          onClick={handleAddOne}
        >
          +1
        </button>
      </div>
    </>
  );
};
