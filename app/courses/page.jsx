import CoursesClient from './CoursesClient';
import Script from 'next/script';

export const metadata = {
  title: "Courses | VAWE Institute - Professional Training Programs",
  description:
    "Explore 100+ professional courses at VAWE Institute. Learn software development, data science, digital marketing, business management, and more. Expert-led training in Vijayawada.",
  keywords: [
    "VAWE Institute courses",
    "software training courses",
    "IT courses Vijayawada",
    "professional training programs",
    "online courses",
    "certification courses",
    "web development course",
    "data science course",
    "digital marketing course",
  ],
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Courses | VAWE Institute - Professional Training Programs",
    description:
      "Explore 100+ professional courses at VAWE Institute. Learn software development, data science, digital marketing, and more with expert-led training.",
    type: "website",
    url: "https://vaweinstitute.com/courses",
    images: [
      {
        url: "https://vaweinstitute.com/assets/codingimage.jpg",
        width: 1200,
        height: 630,
        alt: "VAWE Institute - Professional Training Courses",
      },
    ],
    siteName: "VAWE Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses | VAWE Institute",
    description:
      "Explore 100+ professional courses at VAWE Institute. Learn software development, data science, digital marketing, and more.",
    images: ["https://vaweinstitute.com/assets/codingimage.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "VAWE Institute Courses",
  description:
    "Professional training courses in software development, data science, digital marketing, business management, and more.",
  provider: {
    "@type": "EducationalOrganization",
    name: "VAWE Institute",
    url: "https://vaweinstitute.com",
  },
  courseCode: "VAWE-100",
  educationalLevel: "Professional",
  teaches: [
    "Software Development",
    "Data Science",
    "Digital Marketing",
    "Business Management",
    "Web Development",
    "Mobile App Development",
  ],
  inLanguage: "en-US",
  availableLanguage: ["English", "Telugu", "Hindi"],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
  },
};

export default function Courses() {
  return (
    <>
      <Script
        id="jsonld-courses"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CoursesClient />
    </>
  );
}
