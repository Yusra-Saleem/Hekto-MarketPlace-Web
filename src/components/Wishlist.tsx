"use client";
import { client } from "../sanity/lib/client";
import { useEffect, useState } from "react";

const fetchWishlist = async (userId: string) => {
  const query = `*[_type == "user" && _id == $userId][0] {
    wishlist[]->{
      _id,
      name,
      price
    }
  }`;
  return await client.fetch(query, { userId });
};

const Wishlist = ({ userId }: { userId: string }) => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    if (userId) {
      fetchWishlist(userId).then((data) => setWishlist(data.wishlist || []));
    }
  }, [userId]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">Wishlist</h2>
      {wishlist.length > 0 ? (
        wishlist.map((product) => (
          <div key={product._id} className="mb-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default Wishlist;