import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";

// type Props = {}

const NavbarHeader = () => {
  return (
    <header className="z-50">
      <nav className="flex fixed w-full bg-white dark:bg-rose-950 flex-row items-center justify-between py-2 px-24 rounded-b-2xl shadow-md dark:shadow-sm dark:shadow-gray-800">
        <Link href="/" className="hover:text-gray-600">
          <h1 className="dark:text-white ">My Blog</h1>
        </Link>
        <div className="flex gap-2">
          <Link href="/studio">
            <Button>Get Join</Button>
          </Link>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default NavbarHeader;
