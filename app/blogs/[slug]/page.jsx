import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";
import CopyLinkButton from "./CopyLinkButton";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  const url = `https://vaweinstitute.com/blogs/${post.slug}`;
  const imageUrl = post.coverImage
    ? `https://vaweinstitute.com${post.coverImage}`
    : `https://vaweinstitute.com/assets/codingimage.jpg`;
  
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      siteName: "VAWE Institute",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

// Calculate reading time based on content length
function calculateReadingTime(post) {
  const wordsPerMinute = 200;
  const totalWords = post.sections.reduce((acc, section) => {
    return acc + section.heading.split(" ").length + section.body.split(" ").length;
  }, 0);
  const minutes = Math.ceil(totalWords / wordsPerMinute);
  return minutes;
}

// Get related posts based on shared tags
function getRelatedPosts(currentPost, allPosts, limit = 3) {
  if (!currentPost.tags || currentPost.tags.length === 0) {
    return allPosts
      .filter((p) => p.slug !== currentPost.slug)
      .slice(0, limit);
  }

  const related = allPosts
    .filter((p) => p.slug !== currentPost.slug)
    .map((p) => {
      const sharedTags = p.tags
        ? p.tags.filter((tag) => currentPost.tags.includes(tag)).length
        : 0;
      return { post: p, score: sharedTags };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);

  // If not enough related posts, fill with recent posts
  if (related.length < limit) {
    const recent = allPosts
      .filter((p) => p.slug !== currentPost.slug && !related.includes(p))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit - related.length);
    related.push(...recent);
  }

  return related.slice(0, limit);
}

// Get previous and next posts
function getAdjacentPosts(currentPost, allPosts) {
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const currentIndex = sortedPosts.findIndex((p) => p.slug === currentPost.slug);
  
  return {
    previous: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
    next: currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  const publishedTime = new Date(post.date).toISOString();
  const url = `https://vaweinstitute.com/blogs/${post.slug}`;
  const readingTime = calculateReadingTime(post);
  const relatedPosts = getRelatedPosts(post, posts);
  const { previous, next } = getAdjacentPosts(post, posts);
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(post.title);

  const imageUrl = post.coverImage
    ? `https://vaweinstitute.com${post.coverImage}`
    : `https://vaweinstitute.com/assets/codingimage.jpg`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: publishedTime,
    dateModified: publishedTime,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "VAWE Institute",
      logo: {
        "@type": "ImageObject",
        url: "https://vaweinstitute.com/favicon.ico",
      },
    },
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.keywords?.join(", "),
    articleSection: post.tags?.[0] || "Software Training",
    inLanguage: "en-US",
  };

  return (
    <main className="min-h-screen bg-white">
      <article className="container mx-auto px-4 py-10 md:py-14">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-600">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blogs" className="hover:text-blue-600 transition-colors">
                Blogs
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 truncate max-w-md">{post.title}</li>
          </ol>
        </nav>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blogs?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 text-sm font-medium bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{readingTime} min read</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm text-gray-600 font-medium">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
                aria-label="Share on Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                aria-label="Share on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <CopyLinkButton url={url} />
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg prose-blue max-w-none">
            {post.sections.map((section, idx) => (
              <section key={idx} className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 mt-8">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-8 text-lg">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {/* Tags Footer */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-4">Topics:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blogs?tag=${encodeURIComponent(tag)}`}
                    className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation: Previous/Next */}
          {(previous || next) && (
            <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
              {previous && (
                <Link
                  href={`/blogs/${previous.slug}`}
                  className="group p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="text-sm text-gray-500 mb-2">Previous Post</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {previous.title}
                  </h3>
                </Link>
              )}
              {next && (
                <Link
                  href={`/blogs/${next.slug}`}
                  className="group p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all md:text-right"
                >
                  <div className="text-sm text-gray-500 mb-2">Next Post</div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {next.title}
                  </h3>
                </Link>
              )}
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blogs/${relatedPost.slug}`}
                    className="group block"
                  >
                    <article className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all">
                      {relatedPost.coverImage && (
                        <div className="relative h-40 w-full bg-gray-50">
                          <Image
                            src={relatedPost.coverImage}
                            alt={`${relatedPost.title} - Cover Image`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                          {relatedPost.description}
                        </p>
                        <div className="text-xs text-gray-500">
                          <time dateTime={relatedPost.date}>
                            {new Date(relatedPost.date).toLocaleDateString()}
                          </time>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to Blogs */}
          <div className="mt-12 text-center">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to All Blogs
            </Link>
          </div>
        </div>
      </article>
      <Script
        id="jsonld-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}


