"use client";
import React, { useState } from 'react';
import Link from 'next/link';
// Import the static data from your data folder
import { events } from "../../../data/events"; ;

const AllEventsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events based on the search query
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl font-bold">All Events</h1>
        
        {/* Search Input */}
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Search by title or location..."
            className="input input-bordered w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all">
              <figure className="h-48">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">{event.title}</h2>
                <p className="text-sm text-gray-500">{event.date} | {event.location}</p>
                <p className="line-clamp-2 mt-2">{event.description}</p>
                
                <div className="card-actions justify-end mt-4">
                  {/* Link to Detail Page - We use the ID for the dynamic route */}
                  <Link href={`/items/${event.id}`} className="btn btn-primary btn-sm">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl opacity-50">No events found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default AllEventsPage;