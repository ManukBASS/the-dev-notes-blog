// Utils
import { PostTypes } from "@/utils/PostTypes";
import { getPosts } from "@/utils/getPosts";

// Next imports
import Link from "next/link";

export default async function PostPage(props: { params: { slug: any } }) {
  const posts = await getPosts(
    `posts?populate=*&filters[slug][$eq]=${props.params.slug}`
  );
  const post = posts.data[0];
  if (posts.data.length === 0) return null;

  return (
    <section className="min-h-screen">
      <Link href="/">Back</Link>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
      </div>
      <div>{post.attributes.createdAt}</div>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await fetch(`http://127.0.0.1:1337/api/posts?populate=*`).then(
    (res) => res.json()
  );

  return posts.data.map((post: PostTypes) => ({
    slug: post.attributes.slug,
  }));
}
