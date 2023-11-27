// Next imports
import Link from "next/link";

// Shadcn/ui imports
import { Separator } from "../ui/separator";

// Custom components
import { SearchPosts } from "../SearchPosts/SearchPosts";

// Icons
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "../ui/button";

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
        <div>
          <SearchPosts />
        </div>
      </header>
      <Separator />
    </>
  );
}
