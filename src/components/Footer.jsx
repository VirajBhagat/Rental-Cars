import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full from-[#F1EAFF] to-[#FFFFFF] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
        <div className="flex items-center space-x-3 mb-6">
          <img className="h-20" src={assets.logo} alt="logo" />
        </div>
        <p className="text-center max-w-xl text-sm font-normal leading-relaxed">
          Find the perfect car to buy or rent with ease. <br />
          Browse verified vehicles, enjoy transparent pricing, and experience a
          smooth, reliable car booking journey.
        </p>
      </div>
      <div className="border-t border-[#3B1A7A]">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm font-normal">
          Copyright 2025 © All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
