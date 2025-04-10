import React from "react";

const Profile = () => {
  const user = {
    name: "Muhammed Faraan",
    email: "faraanshaik19@gmail.com",
    joined: "April 2025",
    orders: 12,
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-10 px-5 md:px-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Your Profile</h2>

        <div className="bg-neutral p-6 rounded-lg shadow-md space-y-4">
          <div className="flex items-center space-x-4">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://i.pravatar.cc/150?img=12" alt="User Avatar" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>

          <div className="divider" />

          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="font-bold text-white">Joined:</p>
              <p>{user.joined}</p>
            </div>
            <div>
              <p className="font-bold text-white">Orders Placed:</p>
              <p>{user.orders}</p>
            </div>
          </div>

          <button className="btn btn-outline btn-error mt-6">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
