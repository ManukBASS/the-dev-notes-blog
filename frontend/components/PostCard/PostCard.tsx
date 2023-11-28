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

// Types
import { PostCardTypes } from "./PostCardTypes";

export function PostCard({
  author,
  author_image,
  description,
  title,
  slug,
}: PostCardTypes) {
  return (
    <Link href={`post/${slug}`} className="cursor-default">
      <Card
        className="p-6 pt-12 flex flex-col gap-5 hover:opacity-70 hover:scale-105 
      hover:border-purple-600 transition-[scale, opacity] duration-100 shadow-lg"
      >
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardFooter className="flex justify-end items-center ">
          <p>{author}</p>
          <Avatar>
            <AvatarImage src={author_image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardFooter>
      </Card>
    </Link>
  );
}
