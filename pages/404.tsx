import React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function Custom404() {
  return (
    <div className="flex justify-center h-screen">
      <Link href="/">
        <AlertCircle size={100} className="text-red-500 animate-pulse" />
        Go back home
      </Link>
    </div>
  );
}
