"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";

const MobileNav = (): React.ReactElement => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setisOpen}>
      <SheetTrigger asChild>
        <Button variant={"outline"} className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side={"right"}>
        <MobileLink
          href={"/"}
          className="flex items-center"
          onOpenChange={setisOpen}
        >
          <Icons.logo className="mr-2 h-2 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink onOpenChange={setisOpen} href={"/blog"}>
            Blog
          </MobileLink>
          <MobileLink onOpenChange={setisOpen} href={"/blog"}>
            About
          </MobileLink>
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            Github
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.linkedIn}
          >
            Linkedin
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.portfolio}
          >
            Portfolio
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

const MobileLink = ({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

export default MobileNav;
