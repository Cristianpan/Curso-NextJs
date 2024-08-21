import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
       <h1 className="text-center text-5xl">Home</h1>
       <Link href="/about">About Page</Link>
    </main>
  );
}
