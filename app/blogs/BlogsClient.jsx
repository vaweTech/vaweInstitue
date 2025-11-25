"use client";

import { useMemo, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function BlogsClient({ posts }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedTag = useMemo(() => {
    const tagParam = searchParams.get("tag");
    return tagParam ? decodeURIComponent(tagParam) : "";
  }, [searchParams]);

  const updateTagFilter = useCallback(
    (tag) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!tag) {
        params.delete("tag");
      } else {
        params.set("tag", tag);
      }
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set();
    posts.forEach((post) => {
      if (post.tags && Array.isArray(post.tags)) {
        post.tags.forEach((tag) => tagsSet.add(tag));
      }
    });
    return Array.from(tagsSet).sort();
  }, [posts]);

  // Filter and sort posts (newest first by default)
  const filteredPosts = useMemo(() => {
    let filtered = [...posts];

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(
        (post) => post.tags && post.tags.includes(selectedTag)
      );
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    return filtered;
  }, [posts, selectedTag]);

  return (
    <div>
      {/* Tag Filter Section */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => updateTagFilter("")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTag === ""
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Topics
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                updateTagFilter(selectedTag === tag ? "" : tag)
              }
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Count */}
        {selectedTag && (
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredPosts.length} of {posts.length} blog posts in &ldquo;{selectedTag}&rdquo;
          </div>
        )}
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-gray-100 shadow hover:shadow-lg transition-all duration-300 bg-white overflow-hidden group"
            >
              <Link href={`/blogs/${post.slug}`} className="block">
                <div className="relative h-44 w-full bg-gray-50 overflow-hidden">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={`${post.title} - Cover Image`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={false}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-blue-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-gray-500">
                          +{post.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <div>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                    <div className="font-medium">{post.author}</div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <svg
            className="mx-auto h-16 w-16 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            No blogs found
          </h3>
          <p className="text-gray-600 mb-4">
            {selectedTag
              ? "Try selecting a different topic."
              : "No blog posts available at the moment."}
          </p>
          {selectedTag && (
            <button
              onClick={() => updateTagFilter("")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Clear Filter
            </button>
          )}
        </div>
      )}
    </div>
  );
}

