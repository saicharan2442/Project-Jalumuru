
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EventsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-12 bg-temple-cream">
        <div className="temple-container">
          <h1 className="section-title">Events</h1>
          <p className="text-lg mb-8">
            Stay updated with upcoming religious events, festivals, and celebrations at Jalumuru Hill temples.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 border border-gold-light/30">
            <p className="text-center text-muted-foreground">
              Events calendar and details coming soon...
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
