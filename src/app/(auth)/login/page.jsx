"use client";
import { useState } from "react"; // Import useState
import { useAuth } from "../../../providers/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const { signIn } = useAuth();
  const router = useRouter();
  
  // State to store and show error messages
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors before trying again
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
      router.push("/"); 
    } catch (err) {
      console.error(err.message);
      
      // Map Firebase error codes to user-friendly messages
      if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setError("Invalid email or password. Please try again.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many failed attempts. Please try again later.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200 px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-4xl bg-base-100 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Side: Branding */}
        <div className="hidden lg:flex lg:w-1/2 bg-primary items-center justify-center p-12 text-primary-content">
          <div className="max-w-sm">
            <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
            <p className="text-lg opacity-90 mb-8">
              Log in to manage your events, track registrations, and discover new experiences.
            </p>
            <div className="border-l-4 border-secondary pl-4">
              <p className="italic">"The best way to predict the future is to create it."</p>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <div className="text-center lg:text-left mb-10">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-base-content/60 mt-2">Enter your credentials to access your account</p>
          </div>

          {/* Error Message Display */}
          {error && (
            <div className="alert alert-error shadow-sm mb-6 py-3 rounded-lg text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input 
                name="email" 
                type="email" 
                placeholder="name@example.com" 
                className={`input input-bordered w-full ${error ? 'input-error' : 'focus:input-primary'}`} 
                required 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input 
                name="password" 
                type="password" 
                placeholder="••••••••" 
                className={`input input-bordered w-full ${error ? 'input-error' : 'focus:input-primary'}`} 
                required 
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-primary">Forgot password?</a>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full text-lg">
              Sign In
            </button>
          </form>

          <div className="divider my-8 text-xs uppercase opacity-50">OR</div>

          <div className="text-center">
            <p className="text-base-content/70">
              Don't have an account?{" "}
              <Link href="/auth/register" className="link link-primary font-bold">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}