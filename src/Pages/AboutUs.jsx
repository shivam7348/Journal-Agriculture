import React from 'react';
// import aboutImage from '../assets/about.jpg'; // Make sure the image path is correct

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* <img src={aboutImage} alt="About Us" className="w-full max-w-2xl rounded-lg shadow-lg" /> */}
      <h2 className="text-2xl font-bold mt-4">x</h2>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            About the Journal
          </h2>
          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              The Journal of Agricultural Development & Innovations is a prestigious scholarly 
              publication dedicated to advancing research in the field of agriculture. It serves 
              as a platform for disseminating groundbreaking studies, innovations, and developments 
              that aim to improve agricultural practices, sustainability, food security, and rural livelihoods.
            </p>
            <p className="leading-relaxed">
            The goal of the journal is to provide a platform for researchers, policymakers, and practitioners to share their work and insights, fostering collaboration and innovation in the agricultural sector. By publishing cutting-edge research and practical innovations, it aims to promote sustainable and efficient agricultural practices that address global challenges such as climate change, food insecurity, and resource depletion.

            </p>
            <p className="leading-relaxed">
            Articles in the journal typically undergo a peer-review process to ensure scientific rigor and quality. The journal is often cited by academics and professionals in the field, serving as a valuable resource for those working to improve agriculture and rural development worldwide.

            </p>
            {/* <p className="leading-relaxed">
              By publishing cutting-edge research and practical innovations, we foster 
              collaboration between researchers, policymakers, and practitioners. Our goal 
              is to promote sustainable and efficient agricultural practices that address 
              global challenges such as climate change, food insecurity, and resource depletion.
            </p>
            <div className="border-l-4 border-green-600 pl-4 my-8">
              <p className="text-lg font-semibold text-green-800">
                Published quarterly in March, June, September, and December under the guidance 
                of eminent scientists in the field.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
