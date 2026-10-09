import { Baloo_2, Nunito_Sans } from "next/font/google";
import { store } from "@/data/store";
import "./globals.css";

const heading = Baloo_2({
  subsets: ["latin"],
  weight: "800",
  variable: "--font-heading",
  display: "swap",
});
const body = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});
export const metadata = {
  ...(store.siteUrl
    ? { metadataBase: new URL(store.siteUrl), alternates: { canonical: "/" } }
    : {}),
  title: `${store.name} | La spesa buona, fresca e vicina a casa`,
  description: store.description,
  openGraph: {
    title: store.name,
    description: store.description,
    locale: "it_IT",
    type: "website",
    ...(store.siteUrl ? { url: store.siteUrl } : {}),
  },
  twitter: {
    card: "summary",
    title: store.name,
    description: store.description,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
