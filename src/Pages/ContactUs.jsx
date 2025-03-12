import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="max-w-3xl m-5 mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
      
      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start space-x-3">
          <FaMapMarkerAlt className="text-green-600 mt-1" />
          <div>
            <p className="text-gray-700 font-semibold">The Journal of Agricultural Development & Innovations</p>
            <p className="text-gray-600">268, Kachera Warsabad, District-GB Nagar, UP-203207</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-3">
          <FaPhoneAlt className="text-green-600" />
          <p className="text-gray-600">
            <strong>Tel:</strong> +91-9456651746, +91-9268897969
          </p>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-green-600" />
          <p className="text-gray-600">
            <strong>Email:</strong> 
            <a href="mailto:jpbr.anil@gmail.com" className="text-green-600 hover:underline ml-1">
            aslsubmitarticles@gmail.com
            </a>
          </p>
        </div>

        {/* Working Hours */}
        <div className="flex items-center space-x-3">
          <FaClock className="text-green-600" />
          <p className="text-gray-600">
            <strong>Working Hours:</strong> Monday to Saturday, 10:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
