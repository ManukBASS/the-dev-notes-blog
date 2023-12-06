"use client";

// Custom components
import { PostCard } from "@/components/PostCard/PostCard";
import { PostHeader } from "@/components/PostHeader/PostHeader";

// Get posts
import { usePosts } from "@/utils/getPosts";

// Types
import { PostTypes } from "@/utils/PostTypes";

export default function PostsPage() {
  const { data: posts, isError, isLoading } = usePosts("posts?populate=*");

  return (
    <div>
      <PostHeader />
      <div className="grid grid-cols-1 gap-7 py-4">
        {posts.data.map((post: PostTypes) => (
          <div key={post.id}>
            <PostCard
              slug={`${post.attributes.slug}`}
              title={post.attributes.title}
              description={post.attributes.description}
              author={post.attributes.author}
              author_image={post.attributes.author_image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
