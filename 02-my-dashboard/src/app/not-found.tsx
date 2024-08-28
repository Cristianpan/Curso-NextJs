import Link from "next/link";

export default function NotFound(props: any) {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-6rem)]">
      <p className="text-6xl font-semibold text-blue-600">404</p>
      <h1 className="text-xl font-bold tracking-tight text-gray-900 -rotate-6">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/dashboard"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back dashboard
        </Link>
      </div>
    </div>
  );
}
