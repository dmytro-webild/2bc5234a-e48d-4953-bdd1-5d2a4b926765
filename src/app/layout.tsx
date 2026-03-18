import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";

const halant = Halant({
  variable: "--font-halant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Caribbean Flair Island Jerk Grill | Authentic Jamaican Food | Lehigh Acres",
  description: "Premium authentic Jamaican island fusion food truck in Lehigh Acres, FL. Jerk chicken, curry shrimp, conch fritters & more. Black & women-owned by Teria Bryant & Deb Farrell. Order online today!",
  keywords: "jamaican food, jerk chicken, caribbean restaurant, food truck, lehigh acres, authentic jamaican cuisine, curry shrimp, conch fritters, black owned business, women owned business",
  metadataBase: new URL("https://caribbeanflairgrill.com"),
  alternates: {
    canonical: "https://caribbeanflairgrill.com",
  },
  openGraph: {
    title: "Caribbean Flair Island Jerk Grill - Authentic Jamaican Island Flavors",
    description: "Experience authentic Caribbean fusion. Fresh jerk meats, curry dishes & island soul food. Premium food truck in Lehigh Acres, FL.",
    url: "https://caribbeanflairgrill.com",
    siteName: "Caribbean Flair Island Jerk Grill",
    type: "website",
    images: [
      {
        url: "http://img.b2bpic.net/free-vector/summer-label-collectio_23-2148160410.jpg",
        alt: "Caribbean Flair Island Jerk Grill Trailer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Caribbean Flair Island Jerk Grill - Authentic Jamaican Flavors",
    description: "Order authentic Caribbean food truck fare. Jerk, curry, and soul food made with love.",
    images: ["http://img.b2bpic.net/free-vector/summer-label-collectio_23-2148160410.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body
          className={`${halant.variable} ${inter.variable} ${dmSans.variable} antialiased`}
        >
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}