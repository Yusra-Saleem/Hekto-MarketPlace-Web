"use client";
import { useEffect, useState } from "react";
import { client } from "../sanity/lib/client";

const fetchNotifications = async (userId: string) => {
  const query = `*[_type == "user" && _id == $userId][0] {
    notifications[] {
      message,
      read
    }
  }`;
  return await client.fetch(query, { userId });
};

const Notifications = ({ userId }: { userId: string }) => {
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    if (userId) {
      fetchNotifications(userId).then((data) => setNotifications(data.notifications || []));
    }
  }, [userId]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <div key={index} className="flex justify-between items-center">
            <p>{notification.message}</p>
            {!notification.read && <span className="text-red-500">New</span>}
          </div>
        ))
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
};

export default Notifications;