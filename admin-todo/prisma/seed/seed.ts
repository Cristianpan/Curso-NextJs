import { PrismaClient } from "@prisma/client";
import { todos } from "./data/todo";

const main = async () => {
  const prisma = new PrismaClient();

  await prisma.$executeRawUnsafe(
    `TRUNCATE TABLE "Todo" RESTART IDENTITY CASCADE`
  );

  await prisma.todo.createMany({
    data: todos,
  });

  console.log("Database seeded successfully!");

  process.exit();
};

main();
