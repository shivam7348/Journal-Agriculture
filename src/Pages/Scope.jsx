import React from 'react';
import { Link } from 'react-router-dom';

const Scope = () => {
  const topics = [
    "Agricultural Chemicals",
    "Agricultural Economics",
    "Agricultural Engineering",
    "Agricultural Extension",
    "Agricultural Physics",
    "Agronomy",
    "Biochemistry",
    "Entomology",
    "Environmental Sciences",
    "Floriculture and Landscaping",
    "Fruits and Horticulture",
    "Genetics Irrigation",
    "Genetics",
    "Microbiology",
    "Nematology",
    "Plant Breeding",
    "Plant Biochemistry",
    "Plant Biotechnology",
    "Plant Genetic Resources",
    "Plant Pathology",
    "Plant Physiology",
    "Post Harvest Technology",
    "Seed Science and Technology",
    "Soil Science and Agricultural Chemistry",
    "Vegetable Science",
    "Animal Genetics & Breeding",
    "Animal Nutrition",
    "Animal Physiology",
    "Animal Biochemistry and Biotechnology",
    "Animal Production",
    "Animal Health",
    "Animal Products Technology",
    "Dairying Science",
    "Food Science",
    "Human Nutrition",
    "Extension Education",
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Scope of the Journal</h1>
      <p className="mb-6">The journal covers a broad range of topics including, but not limited to:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, index) => (
          <Link
            key={index}
            // to={`/topic/${topic}`}
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:bg-gray-200 transform transition-all hover:scale-105"
          >
            <h2 className="text-xl font-medium">{topic}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Scope;
