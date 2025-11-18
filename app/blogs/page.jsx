import { Suspense } from "react";
import { posts } from "./posts";
import BlogsClient from "./BlogsClient";

export const metadata = {
  title: "Blogs | VAWE Institute",
  description:
    "Explore expert-written blogs on affordable, high-quality software and non-technical training in Vijayawada, Andhra Pradesh, and Telangana.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs | VAWE Institute",
    description:
      "Explore expert-written blogs on affordable, high-quality software and non-technical training in Vijayawada, Andhra Pradesh, and Telangana.",
    type: "website",
    url: "https://vaweinstitute.com/blogs",
    images: [
      {
        url: "https://vaweinstitute.com/assets/codingimage.jpg",
        width: 1200,
        height: 630,
        alt: "VAWE Institute Blogs - Software Training Articles",
      },
    ],
    siteName: "VAWE Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | VAWE Institute",
    description:
      "Explore expert-written blogs on affordable, high-quality software and non-technical training in Vijayawada, Andhra Pradesh, and Telangana.",
    images: ["https://vaweinstitute.com/assets/codingimage.jpg"],
  },
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto px-4 py-10 md:py-14">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
            VAWE Institute Blogs
          </h1>
          <p className="text-gray-600 mb-2 max-w-3xl">
            Research-driven articles to help you choose low-budget, high-quality
            training in Vijayawada and across Andhra Pradesh & Telangana.
          </p>
          <p className="text-sm text-gray-500">
            Discover {posts.length} expert-written articles covering software training, 
            non-technical courses, placement guidance, and career development.
          </p>
        </div>
        <Suspense fallback={<div className="text-center py-12">Loading blogs...</div>}>
          <BlogsClient posts={posts} />
        </Suspense>
      </section>
    </main>
  );
}


