import { posts } from "#site/content";
import PostItem from "@/components/PostItem";
import QueryPagination from "@/components/QueryPagination";
import { sortPosts } from "@/lib/utils";

const POST_PER_PAGE = 5;
interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const currentPage = Number(searchParams.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POST_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POST_PER_PAGE * (currentPage - 1),
    POST_PER_PAGE * currentPage
  );

  return (
    <div className="container max-w-4xl p-6 lg:py-10 px-5 mx-auto">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 ">
        <div className="flex-1 space-y-4 ">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            FRESH DEV BLOG
          </h1>
          <p className="text-xl text-muted-foreground">
            A place to share intrigues and interests about software development
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description } = post;
            return (
              <li key={slug}>
                <PostItem
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
      <QueryPagination totalPages={totalPages} className="mt-5" />
    </div>
  );
};

export default BlogPage;
