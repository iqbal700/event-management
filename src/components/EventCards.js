export default function EventCards() {
  const events = [1, 2, 3]; // Placeholder for 3 cards
  return (
    <section className="py-20 bg-base-100 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">Featured Events</h2>
            <p className="text-base-content/60">Don't miss out on these upcoming experiences</p>
          </div>
          <button className="btn btn-outline btn-primary hidden md:flex">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow border border-base-200 group">
              <figure className="px-4 pt-4">
                <div className="h-48 w-full bg-slate-200 rounded-xl group-hover:scale-105 transition-transform duration-300"></div>
              </figure>
              <div className="card-body">
                <h2 className="card-title">Music Festival 2026</h2>
                <p>Join us for a night of incredible performances and local food.</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-sm">Get Tickets</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}