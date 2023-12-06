// Shadcn/ui components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Next imports
import Link from "next/link";

// Types
import { Badge } from "../ui/badge";
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
        className="p-6 pt-8 flex flex-col gap-5 hover:opacity-70 hover:scale-105 
      border-purple-600 border-[.0625rem] transition-[scale, opacity] duration-100"
      >
        <CardHeader className="flex flex-row items-center gap-3">
          <Avatar>
            <AvatarImage src={author_image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>{author}</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs">November 2023</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Coding</Badge>
            <Badge variant="outline">Frontend</Badge>
            <Badge variant="outline">Web Development</Badge>
            <Badge variant="outline">Programming</Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
