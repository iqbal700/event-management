import Link from 'next/link'; // Import Link

export default function EventCards() {
  // We can take the first 3 events from your static data to make it look real
  const featuredEvents = [1, 2, 3]; 

  return (
    <section className="py-20 bg-base-100 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Events</h2>
            <p className="text-base-content/60">Don't miss out on these upcoming experiences</p>
          </div>
          
          {/* Wrap the button with Link or change button to Link */}
          <Link href="/items" className="btn btn-outline btn-primary hidden md:flex">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((e) => (
            <div key={e} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-base-200 group">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-slate-200 rounded-xl overflow-hidden">
                   
                </div>
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">Global Tech Summit</h2>
                <p className="line-clamp-2">Experience the latest in innovation and networking with industry leaders.</p>
                <div className="card-actions justify-end mt-4">
                  {/* Also link the individual card button to the events list or a specific item */}
                  <Link href="/items" className="btn btn-primary btn-sm">
                    Get Tickets
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile-only View All button at the bottom */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link href="/items" className="btn btn-primary w-full max-w-xs">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}