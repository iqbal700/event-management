export default function Features() {
  const features = [
    { title: "Easy Scheduling", desc: "Plan your events with our intuitive calendar interface." },
    { title: "Ticket Management", desc: "Sell and manage tickets with real-time analytics." },
    { title: "Global Reach", desc: "Connect with attendees from all over the world." }
  ];

  return (
    <section className="py-20 bg-white px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 border rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-base-200">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-primary text-2xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-base-content/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}