import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Search,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Donors", path: "/donors" },
  { name: "Temples", path: "/temples" },
  { name: "Events", path: "/events" },
  { name: "Ebooks", path: "/ebooks" },
  { name: "Trust Licence", path: "/trust-licence" },
  { name: "Developer", path: "/developer" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-temple-white border-b border-gold-light/30 sticky top-0 z-50 shadow-sm">
      <div className="temple-container">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold text-gold-dark">
              Jalumuru Hill
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="nav-link">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search + Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="border border-gold-light rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gold-light transition-all w-36 focus:w-56"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gold-dark hover:text-gold"
              >
                <Search size={18} />
              </button>
            </form>
            <Button variant="ghost" size="icon" className="text-gold-dark hover:text-gold hover:bg-temple-cream">
              <Facebook size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gold-dark hover:text-gold hover:bg-temple-cream">
              <Instagram size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-gold-dark hover:text-gold hover:bg-temple-cream">
              <Youtube size={20} />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in py-4 bg-temple-white">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 hover:bg-temple-cream rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <form onSubmit={handleSearchSubmit} className="px-4 pt-2">
                <div className="flex items-center border border-gold-light rounded-full px-3 py-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full text-sm outline-none bg-transparent"
                  />
                  <button type="submit" className="text-gold-dark hover:text-gold">
                    <Search size={18} />
                  </button>
                </div>
              </form>

              <div className="flex justify-center space-x-4 pt-4 border-t border-gold-light/30 mt-2">
                <Button variant="ghost" size="icon" className="text-gold-dark hover:text-gold hover:bg-temple-cream">
                  <Facebook size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gold-dark hover:text-gold hover:bg-temple-cream">
                  <Instagram size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gold-dark hover:text-gold hover:bg-temple-cream">
                  <Youtube size={20} />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
