import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TemplesPage = () => {
  const [temples, setTemples] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/temples")
      .then((res) => res.json())
      .then((data) => setTemples(data))
      .catch((err) => console.error("Error fetching temples:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-yellow-700 mb-6 text-center">Temples</h1>
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
                <p className="text-gray-600">
                  <strong>Phone:</strong> {temple.ph_no}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TemplesPage;
