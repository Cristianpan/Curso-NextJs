import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { todoSchemaValidator } from "../validators/TodoValidator";

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string) => {
  const todo = await prisma.todo.findUnique({ where: { id } });

  return todo;
};

export async function GET(request: Request, { params }: Segments) {
  const { id } = params;

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(todo);
}

export async function PUT(request: Request, { params }: Segments) {
  const { id } = params;

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }

  try {
    const { description, complete } = await todoSchemaValidator.validate(
      await request.json()
    );

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { description, complete },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
