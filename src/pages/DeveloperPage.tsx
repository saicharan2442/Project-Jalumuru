
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DeveloperPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-12 bg-temple-cream">
        <div className="temple-container">
          <h1 className="section-title">Developer Information</h1>
          <p className="text-lg mb-8">
            This page contains information about the developers who created and maintain this website.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 border border-gold-light/30">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-2xl font-semibold text-gold-dark mb-4">About the Developer</h2>
              
              <img 
  src="/src/pages/images/sadas.png" 
  alt="Developer" 
  style={{ 
    display: "block", 
    margin: "0 auto", 
    width: "180px", 
    height: "180px", 
    borderRadius: "8px" 
  }}
/>

              <p className="max-w-2xl mx-auto">
               <b> saicharan_sada<br />AI & Data science Engineer </b><br /><br />
                 This website was designed and developed with care to showcase the spiritual and cultural richness of Jalumuru Hill and its temples. 
                Using modern web technologies, we've created an immersive digital experience that honors the divine heritage of this sacred place.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-temple-cream rounded-md">
              <h3 className="font-playfair text-xl font-semibold text-gold-dark mb-4 text-center">Contact the Development Team</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border border-gold-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light" 
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-2 border border-gold-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light" 
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border border-gold-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light" 
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    className="w-full p-2 border border-gold-light/30 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-gold-light" 
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-6 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeveloperPage;
