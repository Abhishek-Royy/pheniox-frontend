// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// function Projectpage() {
//   const [projectdata, setProjectdata] = useState([]);

//   const fetchProjectFromBackend = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:8000/api/v1/projects/projects"
//       );
//       setProjectdata(response.data.message); // Update state with fetched data

//       console.log(projectdata);
//     } catch (err) {
//       console.error("Error fetching projects:", err);
//     }
//   };

//   useEffect(() => {
//     fetchProjectFromBackend();
//   }, []);

//   return (
//     <>
//       <div className="container w-full h-auto md:px-36">
//         <h1 className="text-3xl text-center font-medium mt-10">
//           Wellcome to our project section
//         </h1>

//         <div className="box w-full  mx-auto mt-10 items-center justify-center gap-5 flex flex-wrap">
//           {projectdata.map((item) => (
//             <motion.a
//               href={item.pLiveLink}
//               target="_blank"
//               whileHover={{ y: -5 }}
//               key={item._id}
//               className="cont w-[300px] h-auto bg-gray-100  p-3 rounded-md shadow-xl "
//             >
//               <div className="img w-full h-[180px] bg-blue-500">
//                 <img className="w-full h-full" src={item.pCoverImage} alt="" />
//               </div>
//               <h5 className="text-2xl font-medium mt-2">{item.pTitle}</h5>
//               <div className="desc text-sm w-full ">{item.pdescription}</div>
//               <div className="pCreator text-sm font-bold w-full ">
//                 Created By:- {item.pCreatedBy}
//               </div>

//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Projectpage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Projectpage() {
  const [projectdata, setProjectdata] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); // State to hold the selected project for the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

  const fetchProjectFromBackend = async () => {
    try {
      const response = await axios.get(
        "https://phoenixbackendapi.onrender.com/api/v1/projects/projects"
      );
      setProjectdata(response.data.message); // Update state with fetched data
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  useEffect(() => {
    fetchProjectFromBackend();
  }, []);

  // Function to open the popup
  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedProject(null);
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="container w-full h-auto">
        <h1 className=" mt-10 text-5xl font-extrabold text-gray-200 text-center mb-8">
          Our Works
        </h1>

        <div className="box w-[95%] md:w-full mx-auto mt-10 items-center justify-center gap-5 flex flex-wrap">
          {projectdata.map((item) => (
            <motion.div
              onClick={() => openPopup(item)} // Open popup on project click
              whileHover={{ y: -5 }}
              key={item._id}
              className="cont border-l md:max-w-[300px] w-full md:max-h-[350px] h-auto bg-gradient-to-r from-black to-purple-900 p-4 rounded-md shadow-xl cursor-pointer"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.1) 0px 50px 100px -20px, rgba(0, 0, 0, 0.1) 0px 30px 60px -30px, rgba(10, 37, 64, 0.85) 0px -2px 6px 0px inset",
              }}
            >
              <div className="img w-full h-[180px] bg-blue-500">
                <img className="w-full h-full" src={item.pCoverImage} alt="" />
              </div>
              <h5 className="text-gray-200 text-2xl font-medium mt-2">{item.pTitle}</h5>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup component */}
      {isPopupOpen && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-[90%] max-w-[548px]">
            <button
              onClick={closePopup}
              className="text-gray-500 hover:text-gray-700 font-bold float-right"
            >
              X
            </button>
            <div className="img w-full h-[180px] mt-3">
              <img
                className="w-full h-full object-contain"
                src={selectedProject.pCoverImage}
                alt={selectedProject.pTitle}
              />
            </div>
            <h3 className="text-2xl font-medium mt-5">
              {selectedProject.pTitle}
            </h3>
            <p className="text-sm  mt-2">{selectedProject.pdescription}</p>
            <div className="flex items-center justify-between mt-5">
              <p className="font-semibold">
                Project Created By: {selectedProject.pCreatedBy}
              </p>
              <Link
                className="bg-yellow-300 py-2 px-8 rounded-xl md:w-max  "
                to={selectedProject.pLiveLink}
              >
                Visit Site
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projectpage;
