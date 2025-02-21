
const editorialMembers = [
  {
    id: 1,
    name: "Dr. Manoj Kumar",
    role: "Editor-in-Chief",
    department: "Agriculture Extension",
    institution: "Krishi Vigyan Kendra, Belipar, Gorakhpur (ANDUAT, Kumarganj, Ayodhya)",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Dr. C.P. Singh",
    role: "Managing Editor",
    department: "Professor and Dean, College of Fisheries",
    institution: "ANDUAT Kumarganj, Ayodhya",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Hariom Katiyar",
    role: "Managing Editor",
    department: "Department of Fruit Science",
    institution: "College of Horticulture, SVPUAT, Meerut-250110, India",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Dr. Kamaluddin",
    role: "Managing Editor",
    department: "Professor, Department of Genetics and Plant Breeding",
    institution: "College of Horticulture, BUAT, Banda, India",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Dr. Manish Kumar Verma",
    role: "Managing Editor",
    department: "Department of Veterinary Pharmacology & Toxicology",
    institution: "Sanskaram College of Veterinary & Animal Science, Jhajjar, Haryana, India",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Dr. Jay Kumar Yadav",
    role: "Managing Editor",
    department: "Subject Matter Specialist (Plant Protection)",
    institution: "ICAR-VKS Krishi Vigyan Kendra, Unnao, Uttar Pradesh",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 7,
    name: "Dr. Amit Kumar Mishra",
    role: "Managing Editor",
    department: "Associate HOD and Assistant Professor, Faculty of Agriculture Sciences",
    institution: "Bhagwant University, Ajmer",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 8,
    name: "Dr. Rajbahadur",
    role: "Associate Editor",
    department: "Department of Crop Physiology",
    institution: "College of Agriculture, ANDUAT Kumarganj, Ayodhya",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 9,
    name: "Dr. Shivendra Pratap Singh",
    role: "Associate Editor",
    department: "Subject Matter Specialist, Plant Breeding",
    institution: "Krishi Vigyan Kendra, Belipar, Gorakhpur (ANDUAT, Kumarganj, Ayodhya)",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 10,
    name: "Dr. Akash Singh",
    role: "Associate Editor",
    department: "Department of Genetics and Plant Breeding",
    institution: "Faculty of Agriculture, Shri Krishna University, Chhatarpur (M.P.)",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 11,
    name: "Rahul Kumar Singh",
    role: "Associate Editor",
    department: "Subject Matter Specialist - Agril. Extension",
    institution: "Krishi Vigyan Kendra, Kallipur, Varanasi-221307",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 12,
    name: "Dr. Chandan",
    role: "Associate Editor",
    department: "SMS (Soil Science)",
    institution: "Krishi Vigyan Kendra, Chandauli",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 13,
    name: "Dr. Mahendra Pratap Gautam",
    role: "Associate Editor",
    department: "SMS (Entomology/Hematology)",
    institution: "KVK, Ledaura, Azamgarh-II, 223221",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 14,
    name: "Dr. Sanjeev Singh",
    role: "Associate Editor",
    department: "Department of Vegetable Science",
    institution: "College of Horticulture & Forestry, Acharya Narendra Deva University of Agriculture and Technology, Kumarganj, Ayodhya, (UP) India-224229",
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