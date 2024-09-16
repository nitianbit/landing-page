import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 text-center md:text-left">
          
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-3xl font-bold">APKI PROPERTY</h1>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2">
            <Link to="/about-us" className="hover:underline">ABOUT US</Link>
            <Link to="/products" className="hover:underline">FOR BUYERS</Link>
            <Link to="/clients" className="hover:underline">FOR BUILDERS/DEALERS</Link>
            <Link to="/privacy-policy" className="hover:underline">PRIVACY POLICY</Link>
            <Link to="/contact-us" className="hover:underline">CONTACT US</Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:underline">
              <FaFacebookSquare size={24} />
            </a>
            <a href="#" className="hover:underline">
              <FaInstagramSquare size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-8" />

        {/* Middle Section: Top Cities and What We Offer */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* Top Cities (Left) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-left">TOP CITIES</h2>
            <ul className="grid grid-cols-2 gap-2 text-left text-sm md:text-base">
              <li>DELHI</li>
              <li>MUMBAI</li>
              <li>GURGAON</li>
              <li>PUNE</li>
              <li>FARIDABAD</li>
              <li>BENGALURU</li>
              <li>NOIDA</li>
              <li>CHENNAI</li>
              <li>HYDERABAD</li>
              <li>KOLKATA</li>
            </ul>
          </div>

          {/* What We Offer (Right) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-left">WHAT WE OFFER</h2>
            <ul className="grid grid-cols-2 gap-2 text-left text-sm md:text-base">
              <li>RESIDENTIAL APARTMENTS</li>
              <li>RESIDENTIAL PLOTS</li>
              <li>RESIDENTIAL FLATS</li>
              <li>COMMERCIAL OFFICES</li>
              <li>RESIDENTIAL BUILDER FLOORS</li>
              <li>COMMERCIAL SHOPS</li>
              <li>RESIDENTIAL DUPLEX</li>
              <li>RESIDENTIAL VILLAS</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 my-8" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-xs md:text-sm">&copy; Copyright @apkiproperty.com. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
