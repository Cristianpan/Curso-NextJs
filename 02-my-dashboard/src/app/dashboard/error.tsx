"use client";

import Image from "next/image";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
      <Image
        className="w-1/2 md:w-1/3 lg:w-1/4"
        src="/server-error.svg"
        alt="server error image"
        width={30}
        height={30}
      />

      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">
          500
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
          Server Error
        </p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          Whoops, something went wrong on our servers. Contact support or
        </p>
        <button className="bg-blue-500 text-white py-2 px-5 rounded-lg mt-4" onClick={reset}>Try again</button>

      </div>
    </div>
  );
}
