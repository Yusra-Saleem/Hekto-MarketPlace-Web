"use client";
import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";

const AddressBook = ({ userId }: { userId: string }) => {
  const [addresses, setAddresses] = useState<any[]>([]);
  const [newAddress, setNewAddress] = useState("");

  const fetchAddresses = async () => {
    const query = `*[_type == "user" && _id == $userId][0] {
      addresses
    }`;
    const data = await client.fetch(query, { userId });
    setAddresses(data.addresses || []);
  };

  const handleAddAddress = async () => {
    await client
      .patch(userId)
      .setIfMissing({ addresses: [] })
      .append("addresses", [newAddress])
      .commit();
    fetchAddresses();
    setNewAddress("");
  };

  useEffect(() => {
    if (userId) {
      fetchAddresses();
    }
  }, [userId]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">Address Book</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Add New Address</label>
          <input
            type="text"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleAddAddress}
            className="mt-2 bg-[#FB2E86] text-white px-4 py-2 rounded-lg hover:bg-[#FB2E86]/90"
          >
            Add Address
          </button>
        </div>
        {addresses.map((address, index) => (
          <div key={index} className="flex justify-between items-center">
            <p>{address}</p>
            <button className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddressBook;