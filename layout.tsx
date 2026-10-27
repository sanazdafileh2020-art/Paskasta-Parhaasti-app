import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Paska, Paskempi, Paskin – suomen kielen opiskelusovellus",
    template: "%s | Paska, Paskempi, Paskin",
  },
  description:
    "Learn Finnish the funny way: swear words, slang and culture notes that help you fit into Finnish society. 18+",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
