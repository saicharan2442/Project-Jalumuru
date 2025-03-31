import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// 30 Unique Books with Google Drive links and thumbnails
const books = [
  {
    title: "Bhagavad Gita",
    format: "PDF",
    size: "4.2 MB",
    thumbnail: "https://ice.lol/hYrdYn",
    link: "https://ice.lol/RWZvQF"
  },
  {
    title: "Ramayana",
    format: "PDF",
    size: "5.7 MB",
    thumbnail: "https://ice.lol/Oahbaw",
    link: "https://ice.lol/sXAgYo"
  },
  {
    title: "Mahabharata",
    format: "PDF",
    size: "8.5 MB",
    thumbnail: "https://ice.lol/RnwFkD",
    link: "https://drive.google.com/uc?id=1Mahabharata789"
  },
  {
    title: "Vedas",
    format: "PDF",
    size: "12.4 MB",
    thumbnail: "https://ice.lol/zbbxom",
    link: "https://drive.google.com/uc?id=1Vedas321"
  },
  {
    title: "Upanishads",
    format: "PDF",
    size: "4.8 MB",
    thumbnail: "https://ice.lol/TCjcMm",
    link: "https://drive.google.com/uc?id=1Upanishads654"
  },
  {
    title: "Yoga Sutras",
    format: "PDF",
    size: "2.3 MB",
    thumbnail: "https://ice.lol/zDLNQh",
    link: "https://drive.google.com/uc?id=1YogaSutras987"
  },
  {
    title: "Shiva Purana",
    format: "PDF",
    size: "10.2 MB",
    thumbnail: "https://ice.lol/UnwUMX",
    link: "https://drive.google.com/uc?id=1ShivaPurana567"
  },
  {
    title: "Sri Vishnu Sahasranamam",
    format: "PDF",
    size: "3.1 MB",
    thumbnail: "https://ice.lol/KUakBC",
    link: "https://drive.google.com/uc?id=1VishnuSahasranamam444"
  },
  {
    title: "Devi Mahatmyam",
    format: "PDF",
    size: "3.7 MB",
    thumbnail: "https://ice.lol/wXynjN",
    link: "https://drive.google.com/uc?id=1DeviMahatmyam111"
  },
  {
    title: "Srimad Bhagavatam",
    format: "PDF",
    size: "15.5 MB",
    thumbnail: "https://ice.lol/DwnODq",
    link: "https://drive.google.com/uc?id=1SrimadBhagavatam222"
  },
  {
    title: "Lalita Sahasranamam",
    format: "PDF",
    size: "2.6 MB",
    thumbnail: "https://ice.lol/OHvfor",
    link: "https://drive.google.com/uc?id=1LalitaSahasranamam333"
  },
  {
    title: "Hanuman Chalisa",
    format: "PDF",
    size: "1.1 MB",
    thumbnail: "https://ice.lol/YaEgzK",
    link: "https://drive.google.com/uc?id=1HanumanChalisa777"
  },
  {
    title: "Garuda Purana",
    format: "PDF",
    size: "7.9 MB",
    thumbnail: "https://ice.lol/WFhpXv",
    link: "https://drive.google.com/uc?id=1GarudaPurana888"
  },
  {
    title: "Narada Bhakti Sutra",
    format: "PDF",
    size: "3.4 MB",
    thumbnail: "https://ice.lol/LMHpfA",
    link: "https://drive.google.com/uc?id=1NaradaBhakti666"
  },
  {
    title: "Hanuman Sundhara Kanda",
    format: "PDF",
    size: "3.4 MB",
    thumbnail: "https://ice.lol/waBWFX",
    link: "https://drive.google.com/uc?id=1NaradaBhakti666"
  }
];

const EbooksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow py-8 bg-temple-cream">
        <div className="temple-container">
          <h1 className="section-title">eBooks</h1>
          <p className="text-lg mb-6">
            Download eBooks about temple history, Telugu mythology, and spiritual texts.
          </p>

          {/* Grid Layout for eBook Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-3 border border-gold-light/30 transition-transform hover:scale-105"
                style={{ height: "320px" }}
              >
                <img
                  src={book.thumbnail}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="text-md font-semibold text-gold-dark">{book.title}</h3>
                  <p className="text-sm text-gray-600">Format: {book.format}</p>
                  <p className="text-sm text-gray-600">Size: {book.size}</p>
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    <Button className="mt-2 bg-gold hover:bg-gold-dark text-white w-full">
                      <Download className="mr-2 h-4 w-4" /> Download
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

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
