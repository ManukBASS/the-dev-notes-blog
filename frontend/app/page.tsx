// Custom components
import { PostCard } from "@/components/BlogCard/PostCard";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";

// Shadcn/ui components
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <Header />
      <section className="flex flex-col gap-5">
        <h1 className="font-bold bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text text-3xl lg:text-5xl">
          The Dev Notes <span></span>
        </h1>
        <p className="opacity-75">
          Welcome to The Dev Notes, a blog{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
            created by developers for developers
          </span>{" "}
          where tech meets curiosity!, Quick reads on web development, fun
          facts, and history. Bite-sized insights for your daily tech cravings.
          Join the journey at{" "}
          <span className="font-bold bg-gradient-to-r from-indigo-500 via-fuchsia-700 to-violet-400 inline-block text-transparent bg-clip-text">
            The Dev Notes.
          </span>
        </p>
      </section>
      <Separator />
      <>
        <h2>Latest posts</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </section>
      </>
      <Footer />
    </main>
  );
}
