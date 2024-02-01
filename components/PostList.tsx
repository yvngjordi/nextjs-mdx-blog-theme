import { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

const POSTS_PER_PAGE = 5;

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(posts.length / POSTS_PER_PAGE);
  const router = useRouter();

  const isRootPath = router.pathname === "/" || router.pathname === "";

  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, maxPage));
  };
  
  return (
    <>
    <ul
      className={cx(
        "divide-y -my-8",
        "divide-gray-200",
        "dark:divide-gray-700"
      )}
    >
    {currentPosts.map((post, index) => {
      return (
        <li className="py-8" key={index}>
            <article>
              <time
                className={cx(
                  "block mb-2",
                  "text-gray-500",
                  "dark:text-gray-400"
                )}
              >
                {formatDate(post.date)}
              </time>
              <h2 className="font-bold text-xl">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.description ? (
                <div className="mt-3">
                  <Prose>
                    <p>{post.description}</p>
                  </Prose>
                </div>
              ) : null}
              {post.tags ? (
                <ul className="mt-4 flex flex-wrap space-x-2">
                  {post.tags.map((tag, index) => {
                    return (
                      <li key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </article>
          </li>
        );
      })}
      </ul>
      <div className="mt-8 pt-4" style={{borderTop: '1px solid rgba(160,160,160,0.3)'}}>
        {!isRootPath && (
          <div className="flex justify-between">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              style={{ opacity: currentPage === 1 ? 0.4 : 1 }}
            >
              Previous
            </button>
            {posts.length} total posts
            <button
              onClick={goToNextPage}
              disabled={currentPage === maxPage}
              style={{ opacity: currentPage === maxPage ? 0.4 : 1 }}
            >
              Next page
            </button>
          </div>
        )}
      </div>
    </>
  );
};
