import React from 'react';
import AutoSlider from '../components/AutoSlider';

const Home = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 01-2.5-2.5z" />
          <path d="M8 7h8M8 11h8M8 15h5" />
        </svg>
      ),
      title: "Peer-Reviewed Research",
      description: "High-quality academic content validated through rigorous peer review process"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path d="M9 22V12h6v10" />
        </svg>
      ),
      title: "Agricultural Innovation",
      description: "Latest developments in farming technology and sustainable practices"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Sustainable Solutions",
      description: "Research focusing on environmental sustainability and resource management"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Expert Management",
      description: "Managed quarterly by eminent scientists in the field"
    }
  ];

  return (
    <>
    <AutoSlider/>
        <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            The Journal of Agricultural Development & Innovations
          </h1>
          <p className="text-xl text-center text-green-100">
            Advancing research for sustainable agricultural practices and food security
          </p>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Main Content */}
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
              Our scope encompasses a broad range of topics including agricultural technology, 
              crop science, livestock management, soil health, water management, agricultural 
              economics, and policy. Through comprehensive research and analysis, we aim to 
              address the most pressing challenges facing modern agriculture.
            </p>
            <p className="leading-relaxed">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;