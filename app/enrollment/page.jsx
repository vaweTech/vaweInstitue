import EnrollmentClient from './EnrollmentClient';
import Script from 'next/script';

export const metadata = {
  title: "Enrollment | VAWE Institute - Start Your Learning Journey",
  description:
    "Enroll in professional training courses at VAWE Institute. Complete our simple enrollment form to start your career journey. Expert-led courses in software development, data science, digital marketing, and more.",
  keywords: [
    "VAWE Institute enrollment",
    "course enrollment",
    "training enrollment",
    "enroll in courses",
    "professional training enrollment",
    "IT course enrollment",
    "software training enrollment",
  ],
  alternates: {
    canonical: "/enrollment",
  },
  openGraph: {
    title: "Enrollment | VAWE Institute - Start Your Learning Journey",
    description:
      "Enroll in professional training courses at VAWE Institute. Complete our simple enrollment form to start your career journey.",
    type: "website",
    url: "https://vaweinstitute.com/enrollment",
    images: [
      {
        url: "https://vaweinstitute.com/assets/codingimage.jpg",
        width: 1200,
        height: 630,
        alt: "VAWE Institute - Course Enrollment",
      },
    ],
    siteName: "VAWE Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enrollment | VAWE Institute",
    description:
      "Enroll in professional training courses at VAWE Institute. Complete our simple enrollment form to start your career journey.",
    images: ["https://vaweinstitute.com/assets/codingimage.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Course Enrollment - VAWE Institute",
  description:
    "Enroll in professional training courses at VAWE Institute. Start your learning journey with expert-led courses.",
  url: "https://vaweinstitute.com/enrollment",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "VAWE Institute",
    url: "https://vaweinstitute.com",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vaweinstitute.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Enrollment",
        item: "https://vaweinstitute.com/enrollment",
      },
    ],
  },
};

export default function Enrollment() {
  return (
    <>
      <Script
        id="jsonld-enrollment"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EnrollmentClient />
    </>
  );
}
