import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

const DeveloperPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);
    try {
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setStatusMessage({ type: "success", text: response.data.message });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: error.response?.data?.message || "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />

      {/* Alert Box as a floating card */}
      {statusMessage?.type === "error" && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl shadow-lg max-w-md text-center">
            <p className="font-semibold mb-1">Error</p>
            <p>{statusMessage.text}</p>
            <button
              onClick={() => setStatusMessage(null)}
              className="mt-3 px-4 py-1 bg-red-200 hover:bg-red-300 text-red-800 rounded-md text-sm font-medium transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
                  borderRadius: "8px",
                }}
              />
              <p className="max-w-2xl mx-auto">
                <b> saicharan_sada<br />AI & Data science Engineer </b><br /><br />
                This website was designed and developed with care to showcase the spiritual and cultural richness of Jalumuru Hill and its temples.
                Using modern web technologies, we've created an immersive digital experience that honors the divine heritage of this sacred place.
              </p>
            </div>

            <div className="mt-8 p-6 bg-temple-cream rounded-md">
              <h3 className="font-playfair text-xl font-semibold text-gold-dark mb-4 text-center">
                Contact the Development Team
              </h3>

              {/* Inline success message */}
              {statusMessage?.type === "success" && (
                <div className="text-center mb-4 p-3 bg-green-100 text-green-800 font-medium rounded-md shadow">
                  {statusMessage.text}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gold-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gold-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Subject</label>
                  <input
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 border border-gold-light/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 border border-gold-light/30 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-gold-light"
                    placeholder="Your Message"
                    required
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
