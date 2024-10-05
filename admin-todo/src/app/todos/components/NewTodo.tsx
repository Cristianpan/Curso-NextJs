"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { createTodo, deleteTodosCompleted } from "../helpers/todos";
import { useRouter } from "next/navigation";

export const NewTodo = () => {

  const [description, setDescription] = useState(""); 
  const router = useRouter(); 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); 

    if (!description.trim().length) return; 

    await createTodo(description); 
    router.refresh(); 
    setDescription(""); 
  }

  const handleDeleteCompleted = async () => {
    router.refresh(); 
    await deleteTodosCompleted(); 
  }

  return (
    <form className="flex w-full justify-end items-center mb-5" onSubmit={handleSubmit}>
      <div className="w-3/4 flex gap-3">
        <input
          type="text"
          className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
          placeholder="¿Qué necesita ser hecho?"
          onChange={({target})=> {setDescription(target.value)} }
          value={description}
        />

        <button
          type="submit"
          className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
        >
          Crear
        </button>
      </div>

      <button
        onClick={ handleDeleteCompleted }
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all w-1/6"
      >
        <IoTrashOutline />
        Borras completados
      </button>
    </form>
  );
};
