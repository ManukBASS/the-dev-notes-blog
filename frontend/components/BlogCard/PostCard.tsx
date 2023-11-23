// Shadcn/ui components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

// Next imports
import Link from "next/link";

export function PostCard() {
  return (
    <Link href={"/"} className="cursor-default">
      <Card className="p-6 pt-12 flex flex-col gap-5 hover:opacity-70 hover:scale-105 hover:border-purple-600 transition-[scale, opacity] duration-100">
        <CardTitle>Post title</CardTitle>
        <CardDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          consectetur soluta alias dolores sint placeat rem, exercitationem
          dignissimos mollitia odio?
        </CardDescription>
        <CardFooter className="flex justify-end items-center ">
          <Avatar>
            <AvatarImage src="https://github.com/ignaciofigueroadev.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardFooter>
      </Card>
    </Link>
  );
}
