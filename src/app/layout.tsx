import type { Metadata } from "next";
import { Josefin_Sans, Lato } from 'next/font/google';
import "./globals.css";

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

// Define metadata
export const metadata: Metadata = {
  title: "Your Website Title",
  description: "Your website description goes here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} ${lato.variable}`}>
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
  );
}