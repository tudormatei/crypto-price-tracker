import Providers from "@/components/Providers";
import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Crypto Price Tracker BlockHouse",
  description: "assignment for BlockHouse",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>{" "}
      </body>
    </html>
  );
}
