import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import EventCards from "../components/EventCards";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Stats />
      <EventCards />
      <Testimonials />
    </>
  );
}