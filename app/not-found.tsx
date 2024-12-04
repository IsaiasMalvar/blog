import React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function Custom404() {
  return (
    <div className="flex justify-center h-screen items-center  p-10">
      <Link
        href="/"
        className="flex flex-col justify-center gap-10 items-center"
      >
        <AlertCircle size={200} className="text-red-500 animate-pulse" />
        <span className="text-center text-3xl">
          You have stumbled upon the forgotten lands, where memories come to
          die,
          <span className="uppercase font-bold"> go back</span> before your
          software development knowledge disappears!
        </span>
      </Link>
    </div>
  );
}
