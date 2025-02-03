import React from 'react';
import { useParams } from 'react-router-dom';

// Define the data structure for the topics and their corresponding details
const topicDetails = {
  "Agricultural Chemicals": {
    description: "This topic deals with chemicals used in agriculture to enhance productivity, control pests, and improve soil quality.",
    research: "Recent research focuses on sustainable use and minimizing environmental impact.",
    image: "https://img.etimg.com/thumb/msid-83747484,width-1200,height-900,imgsize-98079,resizemode-8,quality-100/markets/stocks/news/india-pesticides-on-growth-track-in-promising-agro-chemicals-sector.jpg", // Example image path
  },
  "Agricultural Economics": {
    description: "Agricultural economics studies the financial aspects of farming and the agricultural industry.",
    research: "Research is focused on supply chain efficiency, market trends, and policy impacts.",
    image: "/images/agricultural-economics.jpg", // Example image path
  },
  "Agricultural Engineering": {
    description: "Agricultural engineering combines engineering principles with agricultural practices to improve farming equipment and processes.",
    research: "Innovations in machinery, irrigation systems, and sustainable agriculture are central to ongoing research.",
    image: "/images/agricultural-engineering.jpg", // Example image path
  },
  // Add more topics here
};

const TopicPage = () => {
  const { topicName } = useParams(); // Get the topic name from the URL
  const topicData = topicDetails[topicName]; // Fetch the details for the current topic

  if (!topicData) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Topic Not Found</h1>
        <p className="mt-4">Sorry, the requested topic doesn't have details available.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Details for {topicName}</h1>
      
      {/* Display the image */}
      <div className="mt-4">
        <img src={topicData.image} alt={topicName} className="w-full max-w-4xl rounded-lg shadow-lg" />
      </div>

      <p className="mt-4">
        <strong>Description:</strong> {topicData.description}
      </p>
      <p className="mt-4">
        <strong>Research:</strong> {topicData.research}
      </p>
    </div>
  );
};

export default TopicPage;
