import { Geist, Geist_Mono, Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-opensans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://vaweinstitute.com";
const ogImage = `${siteUrl}/assets/codingimage.jpg`;
const siteDescription =
  "VAWE Institute is Vijayawada's best software training institute for job-ready IT, AI, cloud, and digital marketing programs with 2500+ successful alumni and dedicated placement support.";
const siteKeywords = [
  "VAWE Institute",
  "VAWE training center",
  "Vijayawada software training",
  "best software training institute",
  "wave institute",
  "IT courses Vijayawada",
  "software training Andhra Pradesh",
  "data science course Vijayawada",
  "digital marketing training Vijayawada",
  "job oriented training in Vijayawada",
];

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VAWE Institute | Best Software Training Institute in Vijayawada",
    template: "%s | VAWE Institute",
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "VAWE Institute" }],
  creator: "VAWE Institute",
  publisher: "VAWE Institute",
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VAWE Institute | Best Software Training Institute in Vijayawada",
    description: siteDescription,
    url: siteUrl,
    siteName: "VAWE Institute",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Students learning software skills at VAWE Institute Vijayawada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VAWE Institute | Best Software Training in Vijayawada",
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${openSans.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <ScrollToTopButton />
      </body>
    </html>
  );
}
