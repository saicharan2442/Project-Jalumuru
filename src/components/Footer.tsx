
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-temple-brown text-white">
      <div className="temple-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-gold-light/30 pb-2">
              Jalumuru Hill
            </h3>
            <p className="mb-4">
              A divine destination offering spiritual tranquility and cultural 
              heritage, home to ancient temples and sacred rituals.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gold/20 rounded-full hover:bg-gold/40 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gold/20 rounded-full hover:bg-gold/40 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gold/20 rounded-full hover:bg-gold/40 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-gold-light/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/temples" className="hover:text-gold-light transition-colors">
                  Temples
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-gold-light transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/donors" className="hover:text-gold-light transition-colors">
                  Donors
                </Link>
              </li>
              <li>
                <Link to="/ebooks" className="hover:text-gold-light transition-colors">
                  Ebooks
                </Link>
              </li>
              <li>
                <Link to="/trust-licence" className="hover:text-gold-light transition-colors">
                  Trust Licence Documentation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 border-b border-gold-light/30 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-gold-light" />
                <span>Jalumuru Hill, Sri vara siddhi vinayaka kshethram, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-gold-light" />
                <span>+91 8374104423</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-gold-light" />
                <span>jalumuruhill@oakon.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gold-light/30 text-center text-sm">
          <p>© {new Date().getFullYear()} Jalumuru Hill Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
