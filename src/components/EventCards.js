"use client";
import React from 'react';
import Link from 'next/link';

export default function EventCards() {
  const featuredEvents = [
    {
      id: "1",
      title: "Summer Music Festival",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      desc: "Enjoy the best local and international artists in a one-day festival!"
    },
    {
      id: "2",
      title: "Art & Craft Workshop",
      image: "https://images.unsplash.com/photo-1459908676235-d5f02a50184b",
      desc: "Hands-on experience in modern art and traditional crafts."
    },
    {
      id: "4",
      title: "Culinary Arts Expo",
      image: "https://images.unsplash.com/photo-1543353071-873f17a7a088",
      desc: "Discover gourmet dishes and culinary techniques from top chefs."
    }
  ]; 

  return (
    <section className="py-20 bg-base-100 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Events</h2>
            <p className="text-base-content/60">Don't miss out on these upcoming experiences</p>
          </div>
          <Link href="/items" className="btn btn-outline btn-primary hidden md:flex">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <div key={event.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-base-200 group">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-slate-200 rounded-xl overflow-hidden">
                   <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">{event.title}</h2>
                <p className="line-clamp-2">{event.desc}</p>
                <div className="card-actions justify-end mt-4">
                  <Link href="/items" className="btn btn-primary btn-sm">
                    Get Tickets
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center md:hidden">
          <Link href="/items" className="btn btn-primary w-full max-w-xs">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}