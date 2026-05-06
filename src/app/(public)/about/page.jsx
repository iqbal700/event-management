"use client";
import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section with Title & Description */}
      <section className="py-20 bg-base-200 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-primary">About EventMaster</h1>
          <p className="text-xl text-base-content/70 leading-relaxed">
            Welcome to <span className="font-semibold text-primary">EventMaster</span>, 
            the premier platform designed to bridge the gap between event organizers and 
            passionate attendees. Whether you're planning a tech conference, a local music 
            festival, or a small community workshop, we provide the tools to make your 
            vision a reality.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Optional Image Section */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622" 
              alt="People celebrating at an event" 
              className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
            />
          </div>

          {/* Our Mission Details */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="mb-6 text-lg">
              At EventMaster, we believe that shared experiences are the heartbeat of 
              human connection. Our mission is to simplify event management so you can 
              focus on what truly matters: creating unforgettable moments.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Community Focused</h4>
                  <p className="text-sm opacity-70">Built by students and developers who love bringing people together.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Real-time Management</h4>
                  <p className="text-sm opacity-70">Seamlessly update your events and track attendee interest instantly.</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/items" className="btn btn-primary px-8">
                Explore Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple "Why We Started" Section */}
      <section className="bg-neutral text-neutral-content py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="mb-8 opacity-80">
            Join thousands of event organizers who trust EventMaster to power their events. 
            From local meetups to global festivals, we’re with you every step of the way.
          </p>
          <div className="flex justify-center gap-4">
            <div className="stat place-items-center w-auto">
              <div className="stat-value text-primary">10k+</div>
              <div className="stat-desc text-neutral-content">Events Hosted</div>
            </div>
            <div className="stat place-items-center w-auto">
              <div className="stat-value text-secondary">50k+</div>
              <div className="stat-desc text-neutral-content">Happy Users</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;