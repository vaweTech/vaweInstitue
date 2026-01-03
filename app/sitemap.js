import { posts } from "./blogs/posts";
import { courses } from "./courses/data";

export default function sitemap() {
  const baseUrl = "https://vaweinstitute.com"; //https://vaweinstitute.com/
  const now = new Date();

  const staticPages = [
    "",
    "/about",
    "/courses",
    "/contact",
    "/enrollment",
    "/blogs",
    "/placements",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const blogPages = posts.map((p) => ({
    url: `${baseUrl}/blogs/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const coursePages = courses.map((c) => ({
    url: `${baseUrl}/courses/${c.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages, ...coursePages];
}


