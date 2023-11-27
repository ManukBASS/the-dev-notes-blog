import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function SearchPosts() {
  return (
    <div className="flex items-center gap-4">
      <Search className="hidden md:block" />
      <Input placeholder="Search" type="search" className="w-56 outline-none" />
    </div>
  );
}
