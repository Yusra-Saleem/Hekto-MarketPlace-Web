"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import { Package, MapPin, Clock, Plus, Trash2 ,  Edit2, ChevronRight} from "lucide-react"
import { motion } from "framer-motion"

export default function ProfileDashboard() {
  const { user } = useUser();

  // Define the Order interface
  interface Order {
    _id: string;
    total: number;
    paymentDetails: {
      paymentStatus: string;
    };
    cartItems: {
      productId: string;
      name: string;
     
      quantity: number;
    }[];
  }

  // Define the Address interface
  interface Address {
    _id?: string; // Added for Sanity ID
    email: string; // Use `email` instead of `userId`
    name: string;
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  }

  // State variables
  const [orders, setOrders] = useState<Order[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState<Address>({
    email: user?.primaryEmailAddress?.emailAddress ?? "",
    name: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });



  // Fetch orders on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        const response = await fetch(
          `/api/userOrder?email=${user.primaryEmailAddress.emailAddress}`
        );
        const data = await response.json();

        // Ensure `cartItems` is always an array
        const ordersWithItems = data.map((order: Order) => ({
          ...order,
          cartItems: order.cartItems || [], // Initialize `cartItems` as an empty array if undefined
        }));

        setOrders(ordersWithItems);
      }
    };
    fetchOrders();
  }, [user]);

  // Fetch addresses on component mount
  useEffect(() => {
    const fetchAddresses = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        const response = await fetch(
          `/api/addresses?email=${user.primaryEmailAddress.emailAddress}`
        );
        const data = await response.json();
        setAddresses(data);
      }
    };
    fetchAddresses();
  }, [user]);

  const handleAddAddress = async () => {
    if (
      !newAddress.name ||
      !newAddress.street ||
      !newAddress.city ||
      !newAddress.state ||
      !newAddress.postalCode ||
      !newAddress.country
    ) {
      alert("Please fill in all address fields.");
      return;
    }

    try {
      console.log("Sending new address:", newAddress); // Debugging

      const response = await fetch("/api/addresses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAddress),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Debugging
        console.error("Error response:", errorData); // Debugging
        throw new Error("Failed to add address.");
      }

      const result = await response.json();
      setAddresses([...addresses, result]);
      setIsAddingAddress(false);
      setNewAddress({
        email: user?.primaryEmailAddress?.emailAddress || "",
        name: "",
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
      });
      alert("Address added successfully!");
    } catch (error) {
      console.error("Error adding address:", error);
      alert("Failed to add address.");
    }
  };

  // Handle deleting an address
  const handleDeleteAddress = async (id: string): Promise<void> => {
    try {
      const response = await fetch(`/api/addresses?addressId=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete address.");
      }

      const updatedAddresses = addresses.filter((address) => address._id !== id);
      setAddresses(updatedAddresses);
      alert("Address deleted successfully!");
    } catch (error) {
      console.error("Error deleting address:", error);
      alert("Failed to delete address.");
    }
  };
 return(
  <div className="min-h-screen bg-gradient-to-br from-[#F2F0FF] to-[#E6E4FF] py-8 px-4">
      <motion.h1
        className="text-4xl font-bold text-[#101750] mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Account
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Information */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl font-bold text-[#101750] mb-6 flex items-center">
            <Clock className="mr-2 text-[#FB2E86]" /> Profile Information
          </h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <img
                src={user?.imageUrl || "/placeholder.svg"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-[#FB2E86]"
              />
              
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-[#101750]">{user?.fullName}</p>
              <p className="text-gray-600">{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
          </div>
        </motion.div>

        {/* Address Book */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-[#101750] mb-6 flex items-center">
            <MapPin className="mr-2 text-[#FB2E86]" /> Address Book
          </h2>
          {addresses.length > 0 ? (
            <div className="space-y-4">
              {addresses.map((address) => (
                <motion.div
                  key={address._id}
                  className="border-b pb-4 last:border-b-0 hover:bg-gray-50 p-2 rounded-md transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-[#101750]">{address.name}</p>
                      <p className="text-gray-600">
                        {address.street}, {address.city}, {address.state}, {address.postalCode}, {address.country}
                      </p>
                    </div>
                    <Button
                      onClick={() => address._id && handleDeleteAddress(address._id)}
                      className="bg-red-600 hover:bg-red-700 text-white"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No addresses found.</p>
          )}
          <Button
            onClick={() => setIsAddingAddress(!isAddingAddress)}
            className="mt-4 bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white w-full"
          >
            <Plus className="mr-2 h-4 w-4" />
            {isAddingAddress ? "Cancel" : "Add New Address"}
          </Button>
          {isAddingAddress && (
            <motion.div
              className="mt-4 space-y-4 bg-gray-50 p-4 rounded-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Input
                value={newAddress.name}
                onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                placeholder="Full Name"
                className="border-[#FB2E86] focus:ring-[#FB2E86]"
              />
              <Input
                value={newAddress.street}
                onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                placeholder="Street Address"
                className="border-[#FB2E86] focus:ring-[#FB2E86]"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  value={newAddress.city}            
                  onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                  placeholder="City"
                  className="border-[#FB2E86] focus:ring-[#FB2E86]"
                />
                <Input
                  value={newAddress.state}
                  onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                  placeholder="State"
                  className="border-[#FB2E86] focus:ring-[#FB2E86]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  value={newAddress.postalCode}
                  onChange={(e) => setNewAddress({ ...newAddress, postalCode: e.target.value })}
                  placeholder="Postal Code"
                  className="border-[#FB2E86] focus:ring-[#FB2E86]"
                />
                <Input
                  value={newAddress.country}
                  onChange={(e) => setNewAddress({ ...newAddress, country: e.target.value })}
                  placeholder="Country"
                  className="border-[#FB2E86] focus:ring-[#FB2E86]"
                />
              </div>
              <Button onClick={handleAddAddress} className="w-full bg-green-500 hover:bg-green-600 text-white">
                Save Address
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Order History */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-[#101750] mb-6 flex items-center">
            <Package className="mr-2 text-[#FB2E86]" /> Order History
          </h2>
          {orders.length > 0 ? (
            <div className="space-y-6">
              {orders.map((order) => (
                <motion.div
                  key={order._id}
                  className="border-b pb-6 last:border-b-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <p className="font-semibold text-[#101750]">Order ID: {order._id}</p>
                    <span
                      className={`px-3 mr-3 py-1 rounded-full text-sm ${
                        order.paymentDetails.paymentStatus === "Paid"
                          ? "bg-green-100 text-green-800 mb-8 sm:mb-0"
                          : "bg-yellow-100 text-yellow-800 mb-14 sm:mb-0"
                      }`}
                    >
                      {order.paymentDetails.paymentStatus}
                    </span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md mb-4">
                    <p className="font-semibold mb-2">Items:</p>
                    <ul className="space-y-2">
                      {order.cartItems.map((item) => (
                        <li key={item.productId} className="flex justify-between items-center">
                          <span>{item.name}</span>
                          <span className="text-gray-600">Quantity: {item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-[#FB2E86]">Total: ${order.total.toFixed(2)}</p>
                    <Button className="bg-[#FB2E86] hover:bg-[#FB2E86]/90 text-white">
                      View Details <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No orders found.</p>
          )}
        </motion.div>
      </div>
    </div>
  )
}

