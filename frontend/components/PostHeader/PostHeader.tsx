// Next imports
import Link from "next/link";

// Shadcn/ui imports
import { Separator } from "../ui/separator";

// Icons
import { ArrowLeftIcon, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function PostHeader() {
  return (
    <>
      <header className="py-10 flex justify-between items-center">
        <div>
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-3">
              <ArrowLeftIcon />
              <p className="hidden md:block">Back</p>
            </Button>
          </Link>
        </div>
        <div></div>
        <div className="flex items-center gap-4">
          <Search className="hidden md:block" />
          <Input
            placeholder="Search"
            type="search"
            className="w-56 outline-none"
          />
        </div>
      </header>
      <Separator />
    </>
  );
}
