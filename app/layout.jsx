import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import '../styles/global.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Track Food",
  description: "Track food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className='app max-w-screen-xl flex mx-auto p-5'>
          {children}
        </main>
      </body>
    </html>
  );
}
