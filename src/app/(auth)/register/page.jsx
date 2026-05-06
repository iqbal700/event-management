"use client";
import { useAuth } from "../../../providers/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const { createUser} = useAuth();
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // 1. Create the user in Firebase
      await createUser(email, password);
      
      // 3. Redirect to home
      router.push("/"); 
    } catch (error) {
      console.error(error.message);
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-base-100 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Left Side: Branding (Deep Blue/Neutral) */}
        <div className="hidden lg:flex lg:w-1/2 bg-neutral items-center justify-center p-12 text-neutral-content">
          <div className="max-w-sm text-center lg:text-right">
            <h2 className="text-4xl font-bold mb-6">Join EventMaster</h2>
            <p className="text-lg opacity-80 mb-8">
              Start your journey today. Create an account to host events and connect with a global audience.
            </p>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-bold text-primary">Create Account</h1>
            <p className="text-base-content/60 mt-2">Sign up to get full access to your dashboard.</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Full Name</span>
              </label>
              <input 
                name="name" 
                type="text" 
                placeholder="Mohammed Iqbal" 
                className="input input-bordered focus:border-primary w-full bg-base-200/50" 
                required 
              />
            </div>

            {/* Email Address */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
              </label>
              <input 
                name="email" 
                type="email" 
                placeholder="iqbal@example.com" 
                className="input input-bordered focus:border-primary w-full bg-base-200/50" 
                required 
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input 
                name="password" 
                type="password" 
                placeholder="••••••••" 
                className="input input-bordered focus:border-primary w-full bg-base-200/50" 
                required 
              />
            </div>

            <div className="pt-4">
              <button type="submit" className="btn btn-primary btn-block text-lg shadow-md">
                Register
              </button>
            </div>
          </form>

          <div className="divider my-8 opacity-50 uppercase text-xs">Already have an account?</div>

          <div className="text-center">
            <Link href="/login" className="text-primary font-bold hover:underline">
              Sign in to your account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}