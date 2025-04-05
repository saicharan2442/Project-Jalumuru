import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

type Event = {
  id: number;
  eventname: string;
  event_date: string;
  event_temple: string;
  discription: string;
};

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching all events:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-12 bg-temple-cream">
        <div className="temple-container">
          <h1 className="section-title">Events</h1>
          <p className="text-lg mb-6 text-center" >
           <b>Stay updated with upcoming religious events, festivals, and celebrations at Jalumuru Hill temples.</b> 
          </p><br />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card key={event.id} className="card-hover border-gold-light/30 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gold-light/20 p-3 rounded-md">
                      <Calendar className="h-6 w-6 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-gold-dark mb-2">
                        {event.eventname}
                      </h3>
                      <p className="text-sm font-medium text-temple-brown mb-1">{event.event_date}</p>
                      <p className="text-sm text-muted-foreground mb-3">{event.event_temple}</p>
                      <p className="text-sm">{event.discription}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
