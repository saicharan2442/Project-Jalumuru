import React, { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import html2canvas from "html2canvas";
import { Card, CardContent } from "@/components/ui/card";
import { FaDownload } from "react-icons/fa";

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
  const receiptRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

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

  const handleDownload = async (id: number, name: string) => {
    const element = receiptRefs.current[id];
    if (element) {
      const canvas = await html2canvas(element);
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `${name}_Receipt.png`;
      link.click();
    }
  };

  const filteredDonors = donors.filter((donor) =>
    donor.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.phone_number.includes(searchTerm)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-8 bg-yellow-50">
        <div className="temple-container px-4 sm:px-8">
          <h1 className="text-3xl font-bold text-yellow-800 text-center mb-2">All Donors</h1>
          <h2 className="text-lg text-center text-yellow-700 mb-4 font-medium">
          Honoring Our Generous Donors to Jalumuru Hill temples. Who donates ₹ 500+ /-
          </h2>

          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search by name or phone number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md text-center text-yellow-900 font-medium"
            />
          </div>

          {filteredDonors.length === 0 ? (
            <div className="text-center text-red-600 bg-red-50 p-4 rounded-lg border border-red-300 shadow-sm max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">Oops! No donor found.</p>
              <p className="text-sm text-red-700">
                Your name is not found in the search as a donor. If you have donated, please wait until the database is updated. It may take up to 24 hours due to heavy traffic. <br /> Thank you for your support and patience!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredDonors.map((donor) => (
                <div key={donor.id}>
                  <Card className="bg-yellow-100 rounded-2xl border-2 border-yellow-300 transition-transform transform hover:scale-105 hover:shadow-yellow-400/60 hover:shadow-2xl">
                    <CardContent className="p-4">
                      <h2 className="text-xl font-bold text-yellow-700">{donor.Name}</h2>
                      <p className="text-sm text-gray-700">
                        {donor.village}, {donor.district}
                      </p>
                      <p className="text-sm text-gray-600">
                        {donor.email} | {donor.phone_number}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-md font-semibold text-green-700">
                          Donated: ₹{donor.donated}
                        </p>
                        <button
                          onClick={() => handleDownload(donor.id, donor.Name)}
                          className="text-yellow-700 hover:text-yellow-900 transition"
                          title="Download Receipt"
                        >
                          <FaDownload size={20} />
                        </button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Hidden Receipt Preview */}
                  <div
                    ref={(el) => (receiptRefs.current[donor.id] = el)}
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: "1000px",
                      height: "590px",
                      backgroundImage: `url("src/pages/images/payment receipt.png")`,
                      backgroundSize: "cover",
                      fontFamily: "serif",
                      color: "white",
                      padding: "40px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "160px",
                        left: "600px",
                        fontSize: "24px",
                        color: "#fff",
                        lineHeight: "1.8",
                      }}
                    >
                      <p><strong>Name:</strong> {donor.Name}</p>
                      <p><strong>Phone:</strong> {donor.phone_number}</p>
                      <p><strong>Email:</strong> {donor.email}</p>
                      <p><strong>Address:</strong> {donor.village}, {donor.district}</p>
                      <p
                        style={{
                          marginTop: "50px",
                          fontSize: "30px",
                          fontWeight: "bold",
                          color: "#fff",
                        }}
                      >
                        Donated Amount: ₹{donor.donated}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonorSection;
