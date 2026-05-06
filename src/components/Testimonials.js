export default function Testimonials() {
  return (
    <section className="py-20 bg-base-200 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Organizers Say</h2>
        <div className="chat chat-start mb-8">
          <div className="chat-bubble chat-bubble-primary p-6">
            "EventMaster changed the way we handle our annual conference. The dashboard is incredibly easy to use"
          </div>
          <div className="chat-footer opacity-50 mt-2">Sarah Jenkins - CEO TechCorp</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-secondary p-6">
            "Best event platform I've used in 10 years of planning. Responsive and fast"
          </div>
          <div className="chat-footer opacity-50 mt-2">Michael Chen - Event Manager</div>
        </div>
      </div>
    </section>
  );
}