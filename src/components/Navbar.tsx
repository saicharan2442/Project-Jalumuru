
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Facebook, Instagram, Youtube } from "lucide-react";

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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

          {/* Social and Search Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gold-dark hover:text-gold hover:bg-temple-cream">
              <Search size={20} />
            </Button>
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
              <div className="flex justify-center space-x-4 pt-4 border-t border-gold-light/30 mt-2">
                <Button variant="ghost" size="icon" className="text-gold-dark hover:text-gold hover:bg-temple-cream">
                  <Search size={20} />
                </Button>
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
