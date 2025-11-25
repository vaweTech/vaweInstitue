import ContactClient from './ContactClient';

export const metadata = {
  title: "Contact Us | VAWE Institute - Get in Touch",
  description:
    "Contact VAWE Institute in Vijayawada, Andhra Pradesh. Reach us via email, phone, or visit our office. We're here to help with course inquiries, enrollment, and support.",
  keywords: [
    "contact VAWE Institute",
    "VAWE Institute contact",
    "contact software training institute Vijayawada",
    "IT training contact",
    "educational institute contact",
    "Vijayawada training center contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | VAWE Institute - Get in Touch",
    description:
      "Contact VAWE Institute in Vijayawada, Andhra Pradesh. Reach us via email, phone, or visit our office. We're here to help with course inquiries and enrollment.",
    type: "website",
    url: "https://vaweinstitute.com/contact",
    images: [
      {
        url: "https://vaweinstitute.com/assets/codingimage.jpg",
        width: 1200,
        height: 630,
        alt: "VAWE Institute - Contact Us - Get in Touch",
      },
    ],
    siteName: "VAWE Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | VAWE Institute",
    description:
      "Contact VAWE Institute in Vijayawada. Reach us via email, phone, or visit our office. We're here to help with course inquiries and enrollment.",
    images: ["https://vaweinstitute.com/assets/codingimage.jpg"],
  },
};

export default function Contact() {
  return <ContactClient />;
}
