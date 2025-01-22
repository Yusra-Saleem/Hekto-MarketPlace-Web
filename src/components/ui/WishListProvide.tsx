'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export type WishlistItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  color?: string;
  size?: string;
};

export type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
};

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}

export default function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedWishlist = localStorage.getItem('wishlist');
        console.log('Loaded wishlist from localStorage:', savedWishlist); // Debugging
        if (savedWishlist) {
          const parsedWishlist = JSON.parse(savedWishlist);
          if (Array.isArray(parsedWishlist)) {
            setWishlist(parsedWishlist);
          }
        }
      } catch (error) {
        console.error('Failed to load wishlist from localStorage:', error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        console.log('Saving wishlist to localStorage:', wishlist); // Debugging
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      } catch (error) {
        console.error('Failed to save wishlist to localStorage:', error);
      }
    }
  }, [wishlist]);

  const addToWishlist = useCallback((item: WishlistItem) => {
    setWishlist((prevWishlist) => {
      const existingItem = prevWishlist.find((i) => i.id === item.id);
      if (existingItem) {
        toast.info(`${item.name} is already in your wishlist.`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: '#FB2E86',
            color: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        });
        return prevWishlist;
      }
      toast.success(`${item.name} has been added to your wishlist.`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          backgroundColor: '#FB2E86',
          color: '#FFFFFF',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
      });
      return [...prevWishlist, item];
    });
  }, []);

  const removeFromWishlist = useCallback((id: string) => {
    setWishlist((prevWishlist) => {
      const removedItem = prevWishlist.find((item) => item.id === id);
      if (removedItem) {
        toast.success(`${removedItem.name} has been removed from your wishlist.`, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: '#FB2E86',
            color: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        });
      }
      return prevWishlist.filter((item) => item.id !== id);
    });
  }, []);

  const isInWishlist = useCallback((id: string) => {
    return wishlist.some((item) => item.id === id);
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}