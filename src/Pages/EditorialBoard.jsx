import React from 'react';
import { AssociateEditors, editorialMembers, editorialMembers2 } from '../utils/contants';

const MemberCard = ({ member }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
    <h3 className="text-xl font-semibold text-[#2B5A14] mb-2">{member.name}</h3>
    <p className="text-md text-[#C4A01C] font-medium mb-1">{member.role}</p>
    <p className="text-sm text-gray-500 mb-1">{member.department}</p>
    <p className="text-sm text-gray-500">{member.institution}</p>
  </div>
);

const EditorialBoard = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-[#2B5A14] mb-12">
          Editorial Board
        </h2>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {editorialMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#C4A01C] mb-6 text-center">
            Editors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {editorialMembers2.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#2B5A14] mt-6 text-center">
            Associate Editors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {AssociateEditors.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialBoard;