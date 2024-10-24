// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";

// function TeamMember() {
//   const [members, setMembers] = useState([]);
//   const [selectedMember, setSelectedMember] = useState(null);

//   // Function to fetch team member data
//   const fetchedTeamMemberData = async () => {
//     try {
//       const response = await axios.get(
//         "https://phoenixbackendapi.onrender.com/api/v1/team/teammembers"
//       );
//       setMembers(response.data.message);
//       console.log(members);
//     } catch (error) {
//       console.log("Error fetching team member data", error);
//     }
//   };

//   useEffect(() => {
//     fetchedTeamMemberData();
//   }, []);

//   // Function to open the modal
//   const openModal = (member) => {
//     setSelectedMember(member);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setSelectedMember(null);
//   };

//   return (
//     <div className="py-12">
//       <div className="md:max-w-full w-[95%] mx-auto  ">
//         <h1 className="text-5xl font-extrabold text-gray-200 text-center mb-8">
//           Our Team
//         </h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//           {members.map((member) => (
//             <motion.div
//               whileHover={{ y: -5 }}
//               key={member._id}
//               className="bg-gradient-to-b from-black to-[#420658df] rounded-lg overflow-hidden p-6 text-center cursor-pointer"
//               onClick={() => openModal(member)}
//               style={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }}
//             >
//               <img
//                 className="w-24 h-24 rounded-full mx-auto transition-transform transform hover:scale-110"
//                 src={member.Avatar}
//                 alt={member.name}
//               />
//               <h3 className="mt-4 text-lg font-medium text-gray-100">
//                 {member.Name}
//               </h3>
//               <p className="mt-2 text-sm text-gray-300">
//                 {member.RoleInCompany}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {selectedMember && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-8 relative">
//             <button
//               className="absolute top-4 right-4 text-gray-600 font-bold hover:text-gray-900"
//               onClick={closeModal}
//             >
//               X
//             </button>
//             <div className="text-center mb-4">
//               <img
//                 className="w-32 h-32 rounded-full mx-auto"
//                 src={selectedMember.Avatar}
//                 alt={selectedMember.Name}
//               />
//               <h3 className="mt-4 text-2xl font-bold">{selectedMember.Name}</h3>
//             </div>
//             <div className="mb-4">
//               <h4 className="text-xl font-semibold">About</h4>
//               <p className="mt-2 text-gray-700">{selectedMember.About}</p>
//             </div>
//             <div className="mb-4">
//               <h4 className="text-xl font-semibold">Educational Background</h4>
//               <p className="mt-2 text-gray-700">{selectedMember.education}</p>
//             </div>
//             <div className="mb-4">
//               <h4 className="text-xl font-semibold">Skills</h4>
//               <ul className="mt-2 text-gray-700">
//                 {selectedMember.Skils.map((skill, index) => (
//                   <li
//                     key={index}
//                     className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
//                   >
//                     {skill}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h4 className="text-xl font-semibold">Role in Company</h4>
//               <p className="mt-2 text-gray-700">
//                 {selectedMember.RoleInCompany}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default TeamMember;


import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function TeamMember() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  // Function to fetch team member data
  const fetchedTeamMemberData = async () => {
    try {
      const response = await axios.get(
        "https://phoenixbackendapi.onrender.com/api/v1/team/teammembers"
      );
      setMembers(response.data.message);
    } catch (error) {
      console.error("Error fetching team member data", error);
    }
  };

  useEffect(() => {
    fetchedTeamMemberData();
  }, []);

  // Function to open the modal
  const openModal = (member) => {
    setSelectedMember(member);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedMember(null);
  };

  // Function to render the modal content
  const renderModalContent = () => {
    if (!selectedMember) return null;

    const {
      Avatar,
      Name,
      About,
      education,
      Skills = [],
      RoleInCompany,
    } = selectedMember;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-8 relative">
          <button
            className="absolute top-4 right-4 text-gray-600 font-bold hover:text-gray-900"
            onClick={closeModal}
          >
            X
          </button>
          <div className="text-center mb-4">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={Avatar}
              alt={Name || "Team member"}
            />
            <h3 className="mt-4 text-2xl font-bold">{Name}</h3>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">About</h4>
            <p className="mt-2 text-gray-700">{About || "No information available."}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Educational Background</h4>
            <p className="mt-2 text-gray-700">{education || "Not provided."}</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Skills</h4>
            <ul className="mt-2 text-gray-700">
              {Skills.length > 0 ? (
                Skills.map((skill, index) => (
                  <li
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {skill}
                  </li>
                ))
              ) : (
                <p>No skills listed.</p>
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Role in Company</h4>
            <p className="mt-2 text-gray-700">{RoleInCompany || "Not specified."}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="py-12">
      <div className="md:max-w-full w-[95%] mx-auto">
        <h1 className="text-5xl font-extrabold text-gray-200 text-center mb-8">
          Our Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {members.map((member) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={member._id}
              className="bg-gradient-to-b from-black to-[#420658df] rounded-lg overflow-hidden p-6 text-center cursor-pointer"
              onClick={() => openModal(member)}
              style={{ boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px" }}
            >
              <img
                className="w-24 h-24 rounded-full mx-auto transition-transform transform hover:scale-110"
                src={member.Avatar}
                alt={member.Name || "Team member"}
              />
              <h3 className="mt-4 text-lg font-medium text-gray-100">
                {member.Name}
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                {member.RoleInCompany}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {renderModalContent()}
    </div>
  );
}

export default TeamMember;
