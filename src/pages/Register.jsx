import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content py-20 px-5 md:px-20">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        <p className="text-base-content mb-10 text-center">
          Join us! Register your account below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full bg-base-200 border-base-300 text-base-content"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
              placeholder="Enter a strong password"
              className="input input-bordered w-full bg-base-200 border-base-300 text-base-content"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="input input-bordered w-full bg-base-200 border-base-300 text-base-content"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-4">
            Register
          </button>
        </form>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-primary">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
