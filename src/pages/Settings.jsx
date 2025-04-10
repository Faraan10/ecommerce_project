import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white py-10 px-5 md:px-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Settings</h2>

        <div className="space-y-6">
          <div>
            <label className="label">
              <span className="label-text text-white">Display Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-white">Enable Dark Mode</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </label>
          </div>

          <button className="btn btn-primary mt-4">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
