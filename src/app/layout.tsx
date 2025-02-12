import type { Metadata } from "next";
import { Josefin_Sans, Lato } from 'next/font/google';
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartProvider from '../components/ui/CartProvider';
import '@fontsource/josefin-sans/400.css';
import '@fontsource/josefin-sans/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import WishlistProvider from "../components/ui/WishListProvide";
import TopHeader from "../components/topHeader";
import Header from "../components/header";
import Footer from "../components/footer";
import Script from "next/script";

// Define fonts
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Add the weights you need
  variable: '--font-josefin-sans', // Define a custom CSS variable
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Add the weights you need
  variable: '--font-lato', // Define a custom CSS variable
});
// Define SEO-optimized metadata
export const metadata: Metadata = {
  title: "Hekto - Luxury Sofas, Chairs & Home Furniture Online",
  description:
    "Shop premium sofas and chairs at Hekto. Find stylish, comfortable, and high-quality furniture with fast shipping and exclusive discounts.",
  keywords: [
    "Luxury Sofas",
    "Premium Chairs",
    "Buy Sofas Online",
    "Furniture Store",
    "Affordable Sofas",
    "Best Online Furniture Shop",
  ],
  openGraph: {
    title: "Hekto - Luxury Sofas, Chairs & Home Furniture Online",
    description:
      "Upgrade your home with our premium collection of sofas, chairs, and décor. High-quality, stylish furniture with fast delivery.",
    url: "https://hekto-yusrasaleem.vercel.app",
    type: "website",
    
    
  },
  icons: {
    icon: "/favicon.ico", 
    
  },
 
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${josefinSans.variable} ${lato.variable}`}>
      <Script
        src="//code.tidio.co/a4i2cabxbwvbjl4iu6v7w5moy4b7qikj.js"
        strategy="afterInteractive" // Load the script after the page becomes interactive
      />
        {/* Wrap the entire app with CartProvider and WishlistProvider */}
        <CartProvider>
          <WishlistProvider>
            {/* Top Header */}
            <TopHeader />
            
            {/* Main Header */}
            <Header />
            
            {/* Page Content */}
            {children}
            
            {/* Footer */}
            <Footer />
            
            {/* Toast Notifications */}
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              toastStyle={{
                backgroundColor: '#FB2E86',
                color: '#FFFFFF',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}