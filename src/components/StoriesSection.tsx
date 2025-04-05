import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import axios from "axios";

const StoriesSection = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/ebooks")
      .then((response) => {
        const latestBooks = response.data.slice(-4).reverse(); // Get last 4 books
        setBooks(latestBooks);
      })
      .catch((error) => {
        console.error("Error fetching ebooks:", error);
      });
  }, []);

  return (
    <section className="py-10 bg-temple-cream">
      <div className="temple-container">
        <h2 className="section-title">Latest eBooks</h2>
        <p className="text-lg mb-6">
          Explore our newest spiritual and mythological titles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

        <div className="text-center mt-6">
          <a href="/ebooks">
            <Button className="bg-gold hover:bg-gold-dark text-white">
              View All eBooks
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
