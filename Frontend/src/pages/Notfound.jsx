import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl font-extrabold text-gray-900">404</h1>
        <p className="mb-6 text-xl text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>

        <a
          href="/"
          className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}
