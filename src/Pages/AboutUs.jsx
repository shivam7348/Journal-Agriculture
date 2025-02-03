import React from 'react';
// import aboutImage from '../assets/about.jpg'; // Make sure the image path is correct

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* <img src={aboutImage} alt="About Us" className="w-full max-w-2xl rounded-lg shadow-lg" /> */}
      <h2 className="text-2xl font-bold mt-4">x</h2>
      <p className="text-lg text-gray-700 mt-2 text-center max-w-2xl">
        Our journal is dedicated to exploring new advancements in agriculture, fostering innovations,
        and sharing knowledge to improve farming techniques and sustainability practices worldwide.
      </p>
    </div>
  );
}

export default AboutUs;
