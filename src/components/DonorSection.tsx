
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Mock data for donors
const donors = [
  {
    id: 1,
    name: "Rajesh Kumar",
    village: "Jalumuru",
    district: "Srikakulam",
    amount: "₹51,000",
  },
  {
    id: 2,
    name: "Sita Lakshmi",
    village: "Visakhapatnam",
    district: "Visakhapatnam",
    amount: "₹21,000",
  },
  {
    id: 3,
    name: "Venkat Rao",
    village: "Kakinada",
    district: "East Godavari",
    amount: "₹11,000",
  },
  {
    id: 4,
    name: "Padma Reddy",
    village: "Rajamundry",
    district: "East Godavari",
    amount: "₹31,000",
  },
];

const DonorSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="temple-container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="section-title">Our Generous Donors</h2>
          <Link to="/donors">
            <Button variant="outline" className="border-gold hover:bg-gold-light/20 text-gold-dark">
              Join as Donor
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donors.map((donor) => (
            <Card key={donor.id} className="card-hover border-gold-light/30">
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-gold-dark mb-2">{donor.name}</h3>
                <div className="space-y-1 text-sm">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Village:</span>
                    <span className="font-medium">{donor.village}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">District:</span>
                    <span className="font-medium">{donor.district}</span>
                  </p>
                  <p className="flex justify-between mt-4 pt-2 border-t border-gold-light/30">
                    <span className="text-muted-foreground">Donated:</span>
                    <span className="font-bold text-temple-brown">{donor.amount}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/donors">
            <Button variant="ghost" className="text-gold-dark hover:text-gold-dark hover:bg-gold-light/20">
              View All Donors
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonorSection;
