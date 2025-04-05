import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AlignCenter, Download } from "lucide-react";
import axios from "axios";

const EbooksPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/ebooks")
      .then((response) => {
        setBooks(response.data); // assumes response is an array of ebooks
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching ebooks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-8 bg-temple-cream">
        <div className="temple-container">
          <h1 className="section-title">eBooks</h1>
          <p className="text-lg mb-6 text-center">
  <b>Download eBooks about temple history, Telugu mythology, and spiritual texts.</b>
</p>
          {/* Conditional Rendering: Show loader or book cards */}
          {loading ? (
            <div className="text-center text-gray-600">Loading eBooks...</div>
          ) : books.length === 0 ? (
            <div className="text-center text-gray-600">No eBooks found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="bg-white rounded-lg shadow-lg p-3 border border-gold-light/30 transition-transform hover:scale-105"
                  style={{ height: "320px" }}
                >
                  <img
                    src={book.image_url}
                    alt={book.name}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="p-3">
                    <h3 className="text-md font-semibold text-gold-dark">{book.name}</h3>
                    <p className="text-sm text-gray-600">Format: {book.format}</p>
                    <p className="text-sm text-gray-600">Size: {book.size || "N/A"}</p>
                    <a
                      href={book.download_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="mt-2 bg-gold hover:bg-gold-dark text-white w-full">
                        <Download className="mr-2 h-4 w-4" /> Download
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Coming Soon Section */}
          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground">More eBooks coming soon...</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EbooksPage;
