import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const donors = [
  { name: "Ravi Kumar", village: "Jalumuru", district: "Srikakulam", amount: "₹50,000" },
  { name: "Lakshmi Prasad", village: "Pathapatnam", district: "Vizianagaram", amount: "₹75,000" },
  { name: "Sita Reddy", village: "Amadalavalasa", district: "Srikakulam", amount: "₹1,00,000" },
  { name: "Venkat Rao", village: "Narayanapuram", district: "Vizianagaram", amount: "₹60,000" },
  { name: "Anil Kumar", village: "Ichapuram", district: "Srikakulam", amount: "₹30,000" },
  { name: "Priya Sharma", village: "Gajapathi", district: "Vizianagaram", amount: "₹55,000" },
  { name: "Rajesh", village: "Palakonda", district: "Srikakulam", amount: "₹40,000" },
  { name: "Sunitha", village: "Kanchili", district: "Srikakulam", amount: "₹25,000" },
  { name: "Vijay Kumar", village: "Sompeta", district: "Srikakulam", amount: "₹90,000" },
  { name: "Kiran", village: "Pathapatnam", district: "Vizianagaram", amount: "₹85,000" },
  { name: "Ramesh", village: "Narasannapeta", district: "Srikakulam", amount: "₹70,000" },
  { name: "Radha", village: "Tekkali", district: "Srikakulam", amount: "₹35,000" },
  { name: "Venkata", village: "Kaviti", district: "Srikakulam", amount: "₹95,000" },
  { name: "Swathi", village: "Meliaputti", district: "Srikakulam", amount: "₹20,000" },
  { name: "Ravi Teja", village: "Palasa", district: "Srikakulam", amount: "₹15,000" },
  { name: "Bharathi", village: "Baruva", district: "Srikakulam", amount: "₹110,000" },
  { name: "Surya", village: "Gopalapuram", district: "Vizianagaram", amount: "₹65,000" },
  { name: "Kalyan", village: "Laveru", district: "Srikakulam", amount: "₹45,000" },
  { name: "Harsha", village: "Ponduru", district: "Srikakulam", amount: "₹80,000" },
  { name: "Meghana", village: "Regidi", district: "Vizianagaram", amount: "₹120,000" },
  { name: "Manoj", village: "Kotabommali", district: "Srikakulam", amount: "₹55,000" },
  { name: "Sandhya", village: "Mandasa", district: "Srikakulam", amount: "₹65,000" },
  { name: "Ajay", village: "Saravakota", district: "Srikakulam", amount: "₹75,000" },
  { name: "Kiran Kumar", village: "Parvathipuram", district: "Vizianagaram", amount: "₹85,000" },
  { name: "Sudha", village: "Seethampeta", district: "Srikakulam", amount: "₹95,000" },
  { name: "Lokesh", village: "Pathapatnam", district: "Vizianagaram", amount: "₹105,000" },
  { name: "Tejaswini", village: "Tekkali", district: "Srikakulam", amount: "₹115,000" },
  { name: "Raghu", village: "Kanchili", district: "Srikakulam", amount: "₹125,000" },
  { name: "Lavanya", village: "Palasa", district: "Srikakulam", amount: "₹135,000" },
  { name: "Vamsi", village: "Sompeta", district: "Srikakulam", amount: "₹145,000" }
];

const DonorsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-12 bg-temple-cream">
        <div className="temple-container">
          <h1 className="section-title">Donors</h1>
          <p className="text-lg mb-8">
            This page displays a comprehensive list of all donors who have contributed to the development and maintenance of Jalumuru Hill temples.
          </p>

          {/* Grid Layout for Donor Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {donors.map((donor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gold-light/30 transition-transform hover:scale-105">
                <h2 className="text-xl font-bold text-gold-dark">{donor.name}</h2>
                <p className="text-sm text-gray-600">Village: {donor.village}</p>
                <p className="text-sm text-gray-600">District: {donor.district}</p>
                <p className="text-sm font-semibold text-green-700">Donated: {donor.amount}</p>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-lg">
              <b>NOTE:</b> Please contact the following number for any donation-related queries:
            </p>
            <p className="text-2xl font-bold text-blue-600 mt-2">+91 8374104423</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DonorsPage;
