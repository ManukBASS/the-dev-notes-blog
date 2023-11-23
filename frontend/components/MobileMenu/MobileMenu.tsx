import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className="flex flex-col gap-6 w-screen py-10 pl-8 items-center md:w-full md:flex-row md:min-h-0">
          <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
            <Link href="#latestposts">All posts</Link>
          </li>
          <li className="hover:opacity-70 duration-100 ease-out transition-opacity">
            <Link href="/contacts">Contacts</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
