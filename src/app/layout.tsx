import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "The Perfect PizzaPlace - Authentic Italian Pizza",
  description: "Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious. Order now!",
  keywords: "pizza, italian, authentic, organic, stone oven, delivery",
  authors: [{ name: "The Perfect PizzaPlace" }],
  openGraph: {
    title: "The Perfect PizzaPlace - Authentic Italian Pizza",
    description: "Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Perfect PizzaPlace - Authentic Italian Pizza",
    description: "Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.",
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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
