"use client";

// Custom components
import { PostCard } from "@/components/PostCard/PostCard";

// Get posts
import { usePosts } from "@/utils/getPosts";

// Types
import { PostTypes } from "@/utils/PostTypes";
import { Spinner } from "../Spinner/Spinner";

export function LatestPost() {
  const { data: posts, isError, isLoading } = usePosts("posts?populate=*");

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error al cargar los datos</p>;
  }

  return (
    <section className="grid grid-cols-1 gap-7">
      {posts.data.map((post: PostTypes) => (
        <div key={post.id}>
          <PostCard
            slug={post.attributes.slug}
            title={post.attributes.title}
            description={post.attributes.description}
            author={post.attributes.author}
            author_image={post.attributes.author_image}
          />
        </div>
      ))}
    </section>
  );
}
