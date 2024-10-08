export const dynamic = 'force-dynamic'; 
export const revalidate = 0; 
import { TodosGrid } from "@/app/todos";
import { NewTodo } from "@/app/todos/components/NewTodo";
import prisma from "@/lib/prisma";

export const metadata = {
  title: "Listado de TODOS",
  description: "Listado de TODOS",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <>
      <NewTodo />
      <TodosGrid todos={todos} />
    </>
  );
}
