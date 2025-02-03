import aboutus from "../assets/aboutus.png"

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <img src={aboutus} alt="About Us" className="w-full max-w-4xl rounded-lg shadow-lg" />
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            About the Journal
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            <strong>The Journal of Agricultural Development & Innovations</strong> is a prestigious
            scholarly publication dedicated to advancing research in agriculture. It serves as a
            platform for groundbreaking studies, innovations, and developments aimed at improving
            agricultural practices, sustainability, food security, and rural livelihoods.
          </p>

          <p>
            The journal provides a space for researchers, policymakers, and practitioners to share
            insights, fostering collaboration and innovation in the agricultural sector. By
            publishing cutting-edge research and practical innovations, it aims to promote
            sustainable and efficient agricultural practices addressing global challenges such as
            climate change, food insecurity, and resource depletion.
          </p>

          <p>
            All articles undergo a rigorous peer-review process to ensure scientific accuracy and
            quality. The journal is widely cited by academics and professionals, serving as a
            valuable resource for advancing global agricultural and rural development.
          </p>

          {/* Highlighted Information */}
          <div className="border-l-4 border-green-600 pl-4 py-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-semibold text-green-800">
              Published quarterly in <strong>March, June, September, and December</strong> under
              the guidance of eminent scientists in the field.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
