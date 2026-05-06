"use client";
import React from 'react';
import Link from 'next/link';
// Importing stable icons from Font Awesome and Ionicons sets
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoMail, IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">EventMaster</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              Making event management effortless. From local meetups to international summits, we help you create experiences that matter.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-all text-xl"><FaFacebookF /></a>
              <a href="#" className="hover:text-primary transition-all text-xl"><FaTwitter /></a>
              <a href="#" className="hover:text-primary transition-all text-xl"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="footer-title opacity-100 font-bold mb-4">Quick Links</h6>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="link link-hover opacity-70 hover:opacity-100">Home</Link>
              <Link href="/items" className="link link-hover opacity-70 hover:opacity-100">All Events</Link>
              <Link href="/about" className="link link-hover opacity-70 hover:opacity-100">About Us</Link>
              <Link href="/contact" className="link link-hover opacity-70 hover:opacity-100">Contact</Link>
            </nav>
          </div>

          {/* Support Section */}
          <div>
            <h6 className="footer-title opacity-100 font-bold mb-4">Support</h6>
            <nav className="flex flex-col gap-3">
              <a className="link link-hover opacity-70 hover:opacity-100">Help Center</a>
              <a className="link link-hover opacity-70 hover:opacity-100">Terms of Service</a>
              <a className="link link-hover opacity-70 hover:opacity-100">Privacy Policy</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="footer-title opacity-100 font-bold mb-4">Get in Touch</h6>
            <ul className="space-y-4 text-sm opacity-70">
              <li className="flex items-center gap-3">
                <IoLocationSharp className="text-primary text-lg" />
                <span>Chattogram, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <IoMail className="text-primary text-lg" />
                <span>support@eventmaster.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-content/10 bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} EventMaster. All rights reserved.</p>
          <p>Designed with ❤️ by Mohammed Iqbal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;