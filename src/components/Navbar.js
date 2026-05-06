"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../providers/AuthProvider'; 

export default function Navbar() {
  const pathname = usePathname();
  const { user, logOut } = useAuth(); 

  const isActive = (path) => pathname === path ? "active" : "";

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 md:px-8">
      
      {/* LEFT SIDE: Mobile Menu + Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/" className={isActive('/')}>Home</Link></li>
            <li><Link href="/items" className={isActive('/items')}>Events</Link></li>
            <li><Link href="/about" className={isActive('/about')}>About</Link></li>
             <li><Link href="/items/add" className={isActive('/items/add')}>Add Event</Link></li>
            <li><Link href="/items/manage" className={isActive('/items/manage')}>Manage Events</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          EventMaster
        </Link>
      </div>

      {/* CENTER SIDE: Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><Link href="/" className={isActive('/')}>Home</Link></li>
          <li><Link href="/items" className={isActive('/items')}>Events</Link></li>
          <li><Link href="/about" className={isActive('/about')}>About</Link></li>
          <li><Link href="/items/add" className={isActive('/items/add')}>Add Event</Link></li>
          <li><Link href="/items/manage" className={isActive('/items/manage')}>Manage Events</Link></li>
          
        </ul>
      </div>

      {/* RIGHT SIDE: Dynamic Auth Button */}
      <div className="navbar-end gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            <button 
              onClick={logOut} 
              className="btn btn-error btn-sm text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className={`btn btn-primary btn-sm px-6 ${isActive('/login')}`}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
}