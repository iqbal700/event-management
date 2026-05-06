"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { events as initialEvents } from "../../../../data/events"; 
import { useRouter } from 'next/navigation';
import PrivateRoute from '../../../../providers/PrivateRoute';


const ManageEventsPage = () => {
  // Using state so we can simulate deleting items
  const [events, setEvents] = useState(initialEvents);

  // Function to simulate deletion
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this event?")) {
      const remainingEvents = events.filter(event => event.id !== id);
      setEvents(remainingEvents);
      alert("Event deleted successfully!");
    }
  };

  return (
     <PrivateRoute>
       <div className="max-w-7xl mx-auto p-6 md:p-10 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Manage Your Events</h1>
          <p className="text-base-content/60">Edit, view, or remove your hosted events from here.</p>
        </div>
        <Link href="/items/add" className="btn btn-primary">
          + Add New Event
        </Link>
      </div>

      {/* Table Container */}
      <div className="bg-base-100 shadow-xl rounded-2xl border border-base-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* Table Head */}
            <thead className="bg-base-200">
              <tr className="text-sm uppercase">
                <th>Event Info</th>
                <th>Location & Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {events.length > 0 ? (
                events.map((event) => (
                  <tr key={event.id} className="hover">
                    <td>
                      <div className="flex items-center gap-4">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={event.image} alt={event.title} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{event.title}</div>
                          <div className="text-xs opacity-50 truncate max-w-[200px]">
                            {event.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="font-medium">{event.location}</span>
                      <br />
                      <span className="badge badge-ghost badge-sm">{event.date}</span>
                    </td>
                    <td>
                      <div className="flex justify-center gap-2">
                        {/* View Button */}
                        <Link 
                          href={`/items/${event.id}`} 
                          className="btn btn-ghost btn-xs text-info hover:bg-info/10"
                        >
                          View
                        </Link>
                        
                        {/* Delete Button */}
                        <button 
                          onClick={() => handleDelete(event.id)}
                          className="btn btn-ghost btn-xs text-error hover:bg-error/10"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center py-10 opacity-50">
                    No events found. Start by adding one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
     </PrivateRoute>
  );
};

export default ManageEventsPage;