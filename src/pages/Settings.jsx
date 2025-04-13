import React, { useEffect, useState } from "react";

const Settings = ({ isDarkMode, setIsDarkMode }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDarkMode(savedTheme === "dark");
  }, []);

  const handleThemeToggle = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content py-10 px-5 md:px-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Settings</h2>

        <div className="space-y-6">
          <div>
            <label className="label">
              <span className="label-text text-base-content">Display Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-base-content">Email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full"
              placeholder="you@example.com"
            />
          </div>

          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="label-text text-base-content">
                Enable Dark Mode
              </span>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={isDarkMode}
                onChange={handleThemeToggle}
              />
            </label>
          </div>

          <button className="btn btn-primary mt-4">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
