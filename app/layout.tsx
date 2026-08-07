import type { Metadata } from "next";
import { headers } from "next/headers";
import { Oswald, Poppins } from "next/font/google";
import "./globals.css";
import "./animations.css";

const display = Oswald({ variable: "--font-display", subsets: ["latin"] });
const body = Poppins({ variable: "--font-body", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

const title = "Andrew Lengkong — Graphic Designer";
const description = "Portfolio of Andrew Lengkong, a graphic designer creating brand, campaign, motion, sports, and digital visual experiences.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const image = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title,
    description,
    openGraph: { title, description, type: "website", images: [{ url: image, width: 1732, height: 909, alt: "Andrew Lengkong graphic design portfolio" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
