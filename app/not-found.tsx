import React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function Custom404() {
  return (
    <div className="flex justify-center h-screen items-center p-10">
      <Link href="/" className="flex flex-col justify-center items-center">
        <AlertCircle size={400} className="text-red-500 animate-pulse" />
        <span className="text-center text-3xl">
          You have stumbled upon the forbidden lands, you shall go back home!
        </span>
      </Link>
    </div>
  );
}
