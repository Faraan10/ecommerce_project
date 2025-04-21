import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-50 pb-16 px-4 text-center bg-base-100 text-base-content min-h-screen">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 max-w-md mx-auto">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <button className="btn btn-primary">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
