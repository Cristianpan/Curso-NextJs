import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { todoSchemaValidator } from "./validators/TodoValidator";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = +(searchParams.get("take") ?? "10");
  const skip = +(searchParams.get("skip") ?? "0");

  if (isNaN(take) || isNaN(skip)) {
    return NextResponse.json(
      { message: "Take y skip deben de ser valores numéricos" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({ take, skip });

  return NextResponse.json(todos);
}

export async function POST(request: Request) {
  try {
    const { description, complete } = await todoSchemaValidator.validate(
      await request.json()
    );

    const todo = await prisma.todo.create({ data: { description, complete } });

    return NextResponse.json(todo, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
