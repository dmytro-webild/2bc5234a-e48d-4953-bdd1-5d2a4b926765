import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
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
  title: 'CaribbeanFlair1',
  description: 'Caribbean vibes wrapped in a truck',
  keywords: "jamaican food, jerk chicken, caribbean restaurant, food truck, lehigh acres, authentic jamaican cuisine, curry shrimp, conch fritters, black owned business, women owned business",
  metadataBase: new URL("https://caribbeanflairgrill.com"),
  alternates: {
    canonical: "https://caribbeanflairgrill.com",
  },
  openGraph: {
    title: 'CaribbeanFlair1',
    description: 'Caribbean vibes wrapped in a truck',
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
    title: 'CaribbeanFlair1',
    description: 'Caribbean vibes wrapped in a truck',
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Afn0reuidgadYlHif4J2xHlmq8/uploaded-1774035733410-heoi30la.png"],
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