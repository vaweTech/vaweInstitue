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

export const metadata = {
  title: "VAWE Institute - Quality Education & Training",
  description: "Leading training institute offering quality courses in technology, business, and professional development",
  metadataBase: new URL("https://vaweinstitute.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VAWE Institute - Quality Education & Training",
    description:
      "Leading training institute offering quality courses in technology, business, and professional development",
    url: "https://vaweinstitute.com",
    siteName: "VAWE Institute",
    type: "website",
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
