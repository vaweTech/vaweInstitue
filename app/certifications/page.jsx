import CertificationsClient from './CertificationsClient';
import Script from 'next/script';

export const metadata = {
  title: "Certifications | VAWE Institute - Get Certified & Recognized",
  description:
    "Get globally recognized certifications from VAWE Institute. Learn about our certification process, types of certificates (Internship, Short-term, Long-term courses), and how to earn industry-validated credentials through Pearson VUE.",
  keywords: [
    "VAWE Institute certifications",
    "professional certifications",
    "Pearson VUE certifications",
    "internship certificates",
    "course completion certificates",
    "IT certifications",
    "software training certificates",
    "industry-recognized credentials",
    "certification process",
  ],
  alternates: {
    canonical: "/certifications",
  },
  openGraph: {
    title: "Certifications | VAWE Institute - Get Certified & Recognized",
    description:
      "Get globally recognized certifications from VAWE Institute. Learn about our certification process and types of certificates available.",
    type: "website",
    url: "https://vaweinstitute.com/certifications",
    images: [
      {
        url: "https://vaweinstitute.com/assets/certificationimg.jpg",
        width: 1200,
        height: 630,
        alt: "VAWE Institute - Professional Certifications",
      },
    ],
    siteName: "VAWE Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | VAWE Institute",
    description:
      "Get globally recognized certifications from VAWE Institute. Learn about our certification process and types of certificates available.",
    images: ["https://vaweinstitute.com/assets/certificationimg.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "VAWE Institute",
  description:
    "Professional certification programs in software development, data science, digital marketing, and more.",
  url: "https://vaweinstitute.com/certifications",
  offers: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Course",
      name: "Professional Certifications",
      description: "Industry-recognized certifications through Pearson VUE",
    },
  },
};

export default function Certifications() {
  return (
    <>
      <Script
        id="jsonld-certifications"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CertificationsClient />
    </>
  );
}

