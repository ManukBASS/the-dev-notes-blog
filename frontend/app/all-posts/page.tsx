// Custom components
import { PostCard } from "@/components/PostCard/PostCard";
import { PostHeader } from "@/components/PostHeader/PostHeader";

// Get posts
import { getPosts } from "@/utils/getPosts";

// Types
import { PostTypes } from "@/utils/PostTypes";

export default async function PostsPage() {
  const posts = await getPosts("posts?populate=*");

  return (
    <div>
      <PostHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-4">
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
        P
      </div>
    </div>
  );
}
