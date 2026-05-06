"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { events } from "../../../../data/events"; // Ensure this path is correct
import Link from 'next/link';

const EventDetails = () => {
  const { id } = useParams(); // This "grabs" the id from the URL /items/10
  const router = useRouter();

  // Find the specific event that matches the ID from the URL
  const event = events.find((item) => item.id === id);

  // If the event isn't found, show a simple error message
  if (!event) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Event not found!</h2>
        <button onClick={() => router.back()} className="btn btn-primary mt-4">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10">
      {/* Breadcrumbs for better UX */}
      <div className="text-sm breadcrumbs mb-6">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/items">Events</Link></li>
          <li className="text-primary font-semibold">{event.title}</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-200">
        
        {/* Left Side: Large Image */}
        <div className="h-[400px] lg:h-full w-full">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Details Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <div className="badge badge-primary mb-4">Upcoming Event</div>
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-lg">
                <span className="font-bold text-primary">Date:</span>
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-3 text-lg">
                <span className="font-bold text-primary">Location:</span>
                <span>{event.location}</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">About this event</h3>
            <p className="text-base-content/70 leading-relaxed mb-6">
              {event.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary flex-1">Book Your Ticket</button>
            <button onClick={() => router.back()} className="btn btn-outline">
              Back to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;