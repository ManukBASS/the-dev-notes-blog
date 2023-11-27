// Custom components
import { PostCard } from "@/components/PostCard/PostCard";

// Get posts
import { getPosts } from "@/utils/getPosts";

// Types
import { PostTypes } from "@/utils/PostTypes";

export async function LatestPost() {
  const posts = await getPosts("posts?populate=*");

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {posts.data.map((post: PostTypes) => (
          <>
            <PostCard
              key={post.id}
              slug={post.attributes.slug}
              title={post.attributes.title}
              description={post.attributes.description}
              author={post.attributes.author}
              author_image={post.attributes.author_image}
            />
          </>
        ))}
      </div>
    </section>
  );
}
