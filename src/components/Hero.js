"use client";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero min-h-[80vh] bg-base-200 px-4 md:px-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Visual Element (Right Side on Desktop) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-primary h-32 w-32 rounded-2xl rotate-3 shadow-xl"></div>
             <div className="bg-secondary h-32 w-32 rounded-full -rotate-12 shadow-xl"></div>
             <div className="bg-accent h-32 w-32 rounded-tr-3xl shadow-xl"></div>
             <div className="bg-neutral h-32 w-32 rounded-bl-3xl rotate-6 shadow-xl"></div>
          </div>
        </div>

        {/* Text Content (Left Side on Desktop) */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Seamless Event Management for Your <span className="text-primary">Next Big Idea</span>
          </h1>
          <p className="py-6 text-lg md:text-xl text-base-content/80">
            From corporate conferences to private celebrations, EventMaster provides all the tools you need to organize, promote, and manage your events with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/items" className="btn btn-primary btn-lg shadow-lg">
              Explore Events
            </Link>
            <Link href="/about" className="btn btn-outline btn-lg">
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}