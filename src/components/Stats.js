export default function Stats() {
  return (
    <section className="bg-primary text-primary-content py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-transparent">
          <div className="stat place-items-center">
            <div className="stat-title text-primary-content/70">Total Events</div>
            <div className="stat-value">25.6K</div>
          </div>
          <div className="stat place-items-center border-primary-content/20">
            <div className="stat-title text-primary-content/70">Active Users</div>
            <div className="stat-value">1.2M</div>
          </div>
          <div className="stat place-items-center border-primary-content/20">
            <div className="stat-title text-primary-content/70">Partners</div>
            <div className="stat-value">500+</div>
          </div>
        </div>
      </div>
    </section>
  );
}