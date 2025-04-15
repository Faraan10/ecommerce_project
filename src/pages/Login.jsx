import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle login
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content py-10 px-5 md:px-20">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <p className="text-base-content mb-10 text-center">
          Welcome back! Please log in to your account.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full bg-base-200 border-base-300 text-base-content"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full bg-base-200 border-base-300 text-base-content"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="cursor-pointer label">
              <span className="label-text text-base-content">Remember me</span>
              <input type="checkbox" className="checkbox checkbox-primary" />
            </label>
            <a href="/forgot-password" className="text-primary">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Log In
          </button>
        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-primary">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
