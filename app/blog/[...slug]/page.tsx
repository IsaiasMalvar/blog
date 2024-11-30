import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";
import "@/app/mdx-styling.css";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params.slug.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"), // Correct array format for [...slug]
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  console.log("Params:", params); // Debugging
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container p-6 prose dark:prose-invert max-w-3xl mx-auto overflow-hidden">
      <h1 className="mb-2">{post.title}</h1>

      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <hr className="my-4" />
      <div className="break-words">
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
