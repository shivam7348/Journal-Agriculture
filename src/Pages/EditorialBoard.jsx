import React from 'react';
import { editorialMembers, editorialMembers2 } from '../utils/contants';

const MemberCard = ({ member }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
    {/* <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-100 shadow-sm"
    /> */}
    <h3 className="text-xl font-semibold text-gray-700 mb-2">{member.name}</h3>
    <p className="text-md text-gray-600 font-medium mb-1">{member.role}</p>
    <p className="text-sm text-gray-500 mb-1">{member.department}</p>
    <p className="text-sm text-gray-500">{member.institution}</p>
  </div>
);

const EditorialBoard = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Editorial Board
        </h2>

        {/* Primary Members Section - 2 cards */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            {/* Senior Editors */}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {editorialMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* Secondary Members Section - 3 cards */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            Associate Editors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {editorialMembers2.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialBoard;