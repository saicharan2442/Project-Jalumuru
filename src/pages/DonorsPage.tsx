import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

type Donor = {
  id: number;
  Name: string;
  village: string;
  district: string;
  email: string;
  phone_number: string;
  donated: string;
};

const DonorSection: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchDonors = async () => {
    try {
      const response = await fetch("http://localhost:5000/donars");
      const data = await response.json();
      setDonors(data);
    } catch (error) {
      console.error("Error fetching donors:", error);
    }
  };

  useEffect(() => {
    fetchDonors();
    const interval = setInterval(fetchDonors, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredDonors = donors.filter((donor) =>
    donor.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-8 bg-yellow-50">
        <div className="temple-container px-4 sm:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-yellow-800">All Donors</h1>
            <h2 className="text-lg mb-6 text-center">
            Stay updated with Honoring Our Generous Donors to Jalumuru Hill temples.
          </h2>
            <input
              type="text"
              placeholder="Search donor name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredDonors.map((donor) => (
              <Card
                key={donor.id}
                className="bg-yellow-100 rounded-2xl border-2 border-yellow-300 transition-transform transform hover:scale-105 hover:shadow-yellow-400/60 hover:shadow-2xl"
              >
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold text-yellow-700">{donor.Name}</h2>
                  <p className="text-sm text-gray-700">
                    {donor.village}, {donor.district}
                  </p>
                  <p className="text-sm text-gray-600">
                    {donor.email} | {donor.phone_number}
                  </p>
                  <p className="text-md font-semibold text-green-700 mt-2">
                    Donated: {donor.donated}
                  </p>
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

export default DonorSection;
