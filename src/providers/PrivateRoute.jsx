"use client";
import { useAuth } from "../providers/AuthProvider";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname(); // Optional: to remember where they wanted to go

  useEffect(() => {
    // ONLY redirect if we are NOT loading AND there is NO user
    if (!loading && !user) {
      // Redirect to login
      router.push("/login");
    }
  }, [user, loading, router]);

  // 1. Show a loading spinner while checking auth status
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <div className="flex flex-col items-center gap-4">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="text-sm animate-pulse font-medium">Verifying Session...</p>
        </div>
      </div>
    );
  }

  // 2. If user exists, show the protected content
  if (user) {
    return children;
  }

  // 3. While redirecting, return nothing to prevent "flashing" protected content
  return null;
};

export default PrivateRoute;