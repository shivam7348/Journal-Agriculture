import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-lg font-semibold">The Journal of Agricultural Development & Innovations</h2>
        <p className="text-gray-400 mt-1">268, Kachera Warsabad, District-GB Nagar, UP-203207</p>
        
        <div className="mt-3">
          <p className="text-gray-400">
            <strong>Tel:</strong> +91-9456651746, +91-9268897969
          </p>
          <p className="text-gray-400">
            <strong>Email:</strong> 
            <a href="mailto:jpbr.anil@gmail.com" className="text-blue-400 hover:underline ml-1">
              jpbr.anil@gmail.com
            </a>
          </p>
          <p className="text-gray-400">
            <strong>Working Hours:</strong> Monday to Saturday, 10:00 AM - 6:00 PM
          </p>
        </div>

        <hr className="border-gray-700 my-4" />
        
        <p className="text-gray-500 text-sm">&copy; 2025 The Journal of Agricultural Development & Innovations. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
