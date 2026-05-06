import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";  
import Footer from "../components/Footer";  
import { AuthProvider } from "../providers/AuthProvider"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EventMaster | Manage Your Experiences",
  description: "A premier platform for event management and discovery.",
};

export default function RootLayout({ children }) {
 return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light" 
    >
      <body className="min-h-screen flex flex-col">
        {/* 2. Wrap everything inside AuthProvider */}
        <AuthProvider>
          <Navbar />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}