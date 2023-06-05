import Nav from "@components/Nav";
import "@styles/globals.css";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "700"],
});

export const metadata = {
  title: "Simon Portfolio",
  description: "My Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Nav />
        <main className="pt-[80px]">{children}</main>
      </body>
    </html>
  );
}
