"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PrivateRoute from '../../../../providers/PrivateRoute';

const AddEventPage = () => {
  const router = useRouter();
  
  // State for form fields
  const [formData, setFormData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    date: '',
    price: '',
    priority: 'Normal',
    image: ''
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate Success (This is where your Firebase logic will go later)
    console.log("New Event Data:", formData);
    
    // Simple Alert for now
    alert("Success! Event added to your project.");
    
    // Redirect back to events list
    router.push('/items');
  };

  return (
     <PrivateRoute>
        <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-base-100 shadow-2xl rounded-3xl overflow-hidden border border-base-300">
        
        {/* Form Header */}
        <div className="bg-primary p-8 text-primary-content">
          <h1 className="text-3xl font-bold">Create New Event</h1>
          <p className="opacity-80">Fill in the details below to host your next experience.</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          
          {/* Title Field */}
          <div className="form-control w-full">
            <label className="label font-semibold">Event Title</label>
            <input 
              type="text" 
              name="title"
              placeholder="e.g. Dhaka Tech Summit 2026" 
              className="input input-bordered w-full focus:border-primary" 
              required 
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Field */}
            <div className="form-control w-full">
              <label className="label font-semibold">Date</label>
              <input 
                type="date" 
                name="date"
                className="input input-bordered w-full" 
                required 
                onChange={handleChange}
              />
            </div>
            
            {/* Price Field */}
            <div className="form-control w-full">
              <label className="label font-semibold">Ticket Price ($)</label>
              <input 
                type="number" 
                name="price"
                placeholder="0 for free" 
                className="input input-bordered w-full" 
                required 
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Short Description */}
          <div className="form-control w-full">
            <label className="label font-semibold">Short Description</label>
            <input 
              type="text" 
              name="shortDescription"
              placeholder="A brief catchphrase for the card view" 
              className="input input-bordered w-full" 
              maxLength={100}
              required 
              onChange={handleChange}
            />
          </div>

          {/* Full Description */}
          <div className="form-control w-full">
            <label className="label font-semibold">Full Event Details</label>
            <textarea 
              name="fullDescription"
              className="textarea textarea-bordered h-32" 
              placeholder="Tell your attendees all about the event itinerary..."
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Priority Selection */}
            <div className="form-control w-full">
              <label className="label font-semibold">Priority Level</label>
              <select name="priority" className="select select-bordered" onChange={handleChange}>
                <option>Normal</option>
                <option>Featured</option>
                <option>High Priority</option>
              </select>
            </div>

            {/* Optional Image URL */}
            <div className="form-control w-full">
              <label className="label font-semibold">Image URL (Optional)</label>
              <input 
                type="url" 
                name="image"
                placeholder="https://unsplash.com/..." 
                className="input input-bordered w-full" 
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Form Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button type="submit" className="btn btn-primary flex-1">
              Publish Event
            </button>
            <button 
              type="button" 
              onClick={() => router.back()} 
              className="btn btn-ghost"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
     </PrivateRoute>
  );
};

export default AddEventPage;