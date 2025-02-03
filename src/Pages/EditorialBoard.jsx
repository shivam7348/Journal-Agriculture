
const editorialMembers = [
  {
    id: 1,
    name: "Dr. Manoj Kumar",
    role: "Editor-in-Chief",
    department: "Department of Agriculture Extension",
    institution: "KVK Belipar, Gorakhpur, UP",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Dr. Nitin Tanwar",
    role: "Managing Editor",
    department: "Department of Statistics",
    institution: "Lady Shri Ram College for Women, University of Delhi, Delhi",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Dr. Nitin Tanwar",
    role: "Managing Editor",
    department: "Department of Statistics",
    institution: "Lady Shri Ram College for Women, University of Delhi, Delhi",
    image: "https://via.placeholder.com/100",
  },
];

const EditorialBoard = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Editorial Board</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {editorialMembers.map((member) => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border border-gray-300"
              />
              <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
              <p className="text-md text-gray-600 font-medium">{member.role}</p>
              <p className="text-sm text-gray-500">{member.department}</p>
              <p className="text-sm text-gray-500">{member.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialBoard;