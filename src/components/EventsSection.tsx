
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

// Mock data for events
const events = [
  {
    id: 1,
    name: "Ganesh Chaturthi Celebrations",
    date: "September 7, 2024",
    location: "Vinayaka Temple, Jalumuru Hill",
    description: "Special prayers, cultural performances, and community feast."
  },
  {
    id: 2,
    name: "Navaratri Festival",
    date: "October 3-12, 2024",
    location: "Durga Temple, Jalumuru Hill",
    description: "Nine nights of devotional singing, dance performances and special rituals."
  },
  {
    id: 3,
    name: "Annual Temple Chariot Festival",
    date: "November 15, 2024",
    location: "Main Temple, Jalumuru Hill",
    description: "Grand procession of temple deities on decorated chariots around the temple complex."
  }
];

const EventsSection = () => {
  return (
    <div className="py-12 bg-temple-cream">
      <div className="temple-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="section-title">Upcoming Events</h2>
          <Link to="/events">
            <Button variant="outline" className="border-gold hover:bg-gold-light/20 text-gold-dark">
              Calendar View
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="card-hover border-gold-light/30 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-light/20 p-3 rounded-md">
                    <Calendar className="h-6 w-6 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-gold-dark mb-2">{event.name}</h3>
                    <p className="text-sm font-medium text-temple-brown mb-1">{event.date}</p>
                    <p className="text-sm text-muted-foreground mb-3">{event.location}</p>
                    <p className="text-sm">{event.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/events">
            <Button variant="ghost" className="text-gold-dark hover:text-gold-dark hover:bg-gold-light/20">
              See All Events
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
