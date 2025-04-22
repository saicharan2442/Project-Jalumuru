import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Maximize2, X } from "lucide-react"; // Icon from lucide-react

const TemplesPage = () => {
  const [temples, setTemples] = useState([]);
  const [expandedTemple, setExpandedTemple] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/temples")
      .then((res) => res.json())
      .then((data) => setTemples(data))
      .catch((err) => console.error("Error fetching temples:", err));
  }, []);

  const handleExpand = (temple) => {
    setExpandedTemple(temple);
  };

  const handleClose = () => {
    setExpandedTemple(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">Temples</h1>
        <h2 className="text-lg mb-6 text-center">
          Honoring Our Generous Donors to Jalumuru Hill temples.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {temples.map((temple) => (
            <div
              key={temple.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-yellow-300"
            >
              <img
                src={temple.image_url}
                alt={temple.tname}
                className="w-full h-36 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-yellow-800">{temple.tname}</h2>
                <p className="text-gray-600 mt-1">
                  <strong>Donor:</strong> {temple.donar}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {temple.village}, {temple.district}
                </p>
                <div className="text-gray-600 flex items-center justify-between">
                  <p>
                    <strong>Phone:</strong> {temple.ph_no}
                  </p>
                  <button onClick={() => handleExpand(temple)} className="text-yellow-600 hover:text-yellow-800">
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Expanded Modal View */}
      {expandedTemple && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl p-6 relative">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
            >
              <X size={22} />
            </button>
            <img
              src={expandedTemple.image_url}
              alt={expandedTemple.tname}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-yellow-800 mb-2">{expandedTemple.tname}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Donor:</strong> {expandedTemple.donar}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Location:</strong> {expandedTemple.village}, {expandedTemple.district}
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> {expandedTemple.ph_no}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default TemplesPage;
