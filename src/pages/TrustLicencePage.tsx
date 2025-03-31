import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TrustLicencePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-12 bg-temple-cream">
        <div className="temple-container">
          <h1 className="section-title">Trust Licence Documentation</h1>
          <p className="text-lg mb-8">
            View official trust licences, certifications, and legal documents related to Jalumuru Hill temples.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 border border-gold-light/30 flex justify-center items-center">
            {/* Image in A4 Size */}
            <img
              src="/src/pages/images/fake.jpg" 
              alt="Trust Licence Document"
              className="w-[210mm] h-[297mm] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrustLicencePage;
