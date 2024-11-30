"use client";

import Link from "next/link";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const MainNav = (): React.ReactElement => {
  const pathName = usePathname();

  return (
    <nav className="flex items-center space-x-2 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6 px-1" />
        <span className="font-semibold">FDB</span>
      </Link>
      <Link
        href={"/blog"}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathName === "/blog" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Blog
      </Link>
      <Link
        href={"/blog"}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
          pathName === "/about" ? "text-foreground" : "text-foreground/60"
        )}
      >
        About
      </Link>
    </nav>
  );
};

export default MainNav;
