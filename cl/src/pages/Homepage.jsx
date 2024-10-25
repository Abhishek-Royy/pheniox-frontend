import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import Projectpage from "./Projectpage";
import TeamMember from "./TeamMember";
import Servicepage from "./Servicepage";
import Aboutpage from "./Aboutpage";

function Homepage() {
  const slides = [
    {
      heading: "Find the right freelance service,",
      highlight: "right away",
      subheading:
        "Forget the old rules. You can have the best people. Right now. Right here.",
      buttonText: "Get Started",
      imgSrc:
        "https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png",
    },
    {
      heading: "Grow your business,",
      highlight: "effortlessly",
      subheading:
        "Connect with experts who can help you scale and grow in no time.",
      buttonText: "Learn More",
      imgSrc:
        "https://cdni.iconscout.com/illustration/premium/thumb/business-growth-with-team-illustration-download-in-svg-png-gif-file-formats--world-logo-path-graph-network-communication-illustrations-2264300.png",
    },
    {
      heading: "Unlock your potential,",
      highlight: "start now",
      subheading:
        "Join a platform that empowers you to take your career to the next level.",
      buttonText: "Join Now",
      imgSrc:
        "https://cdni.iconscout.com/illustration/premium/thumb/businessman-and-woman-working-on-business-growth-illustration-download-in-svg-png-gif-file-formats--analytics-logo-idea-analysis-basics-pack-illustrations-7540671.png?f=webp",
    },
  ];

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // ----------------*****************--------------------------
  const [allAchivements, setallAchivements] = useState([]);

  const fetchAchievements = async () => {
    try {
      const response = await axios.get(
        "https://phoenixbackendapi.onrender.com/api/v1/achivements/achivements"
      );
      setallAchivements(response.data.message);
      console.log(allAchivements);
    } catch (error) {
      console.error("Error fetching achievements:", error);
      throw error;
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return (
    <>
      <div className="main w-full min-h-auto  bg-gradient-to-b from-black to-[#000025] ">
        {/* section-1 */}
        {/* <div className="sec1 md:w-full w-[95%] mx-auto md:h-[90vh] md:flex md:pt-0 pt-20">
          <div className="sec1-left w-full md:w-1/2 h-full  flex items-start flex-col justify-center">
            <h1 className="md:text-6xl text-5xl font-bold">
              Find the right freelance service,
              <span className="text-[#C6AE32]">right away</span>{" "}
            </h1>
            <h2 className="md:text-xl text-lg font-medium mt-5">
              Forget the old rules. You can have the best people. Right now.
              Right here.
            </h2>
            <button
              type="button"
              className="mt-5 md:block hidden  text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  font-medium rounded-lg md:text-sm text-lg px-10 py-3.5 text-center me-2 mb-2"
            >
              Get Started
            </button>
            <button
              type="button"
              className="mt-5 md:hidden visible  w-full text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  font-medium rounded-lg md:text-sm text-lg px-10 py-3.5 text-center me-2 mb-2"
            >
              Get Started
            </button>
          </div>
          <div className="sec1-right md:w-1/2 h-full flex items-center md:justify-end justify-center md:mt-0 mt-10 ">
            <img
              className="w-[80%] h-full object-contain"
              src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_440,h_300,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
              alt=""
            />
          </div>
        </div> */}

        <div className="sec1 md:w-full w-[95%] md:px-32 mx-auto md:h-[90vh] md:flex md:pt-0 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, staggerChildren: 0.5 }}
            className="sec1-left w-full md:w-1/2 h-full  flex items-start flex-col justify-center"
          >
            <motion.h1
              transition={{ duration: 2 }}
              className="md:text-6xl text-5xl font-bold text-white"
              style={{ fontFamily: '"Oxanium", sans-serif' }}
            >
              {slides[currentSlide].heading}
              <span
                className="text-[#C6AE32]"
                style={{ fontFamily: '"Oxanium", sans-serif' }}
              >
                {" "}
                {slides[currentSlide].highlight}
              </span>
            </motion.h1>
            <motion.h2
              transition={{ duration: 2 }}
              className="md:text-xl text-lg font-medium mt-5 text-white"
            >
              {slides[currentSlide].subheading}
            </motion.h2>
            <motion.button
              transition={{ duration: 2 }}
              type="button"
              className="mt-5 md:block hidden  text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  font-medium rounded-lg md:text-sm text-lg px-10 py-3.5 text-center me-2 mb-2"
            >
              {slides[currentSlide].buttonText}
            </motion.button>
            <motion.button
              transition={{ duration: 2 }}
              type="button"
              className="mt-5 md:hidden visible  w-full text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br  font-medium rounded-lg md:text-sm text-lg px-10 py-3.5 text-center me-2 mb-2"
            >
              {slides[currentSlide].buttonText}
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, staggerChildren: 0.5 }}
            className="sec1-right md:w-1/2 h-full flex items-center md:justify-end justify-center md:mt-0 mt-10"
          >
            <img
              className="w-[90%] h-full object-contain"
              src={slides[currentSlide].imgSrc}
              alt="slider image"
            />
          </motion.div>
        </div>

        {/* section-2 */}
        <div
          className="sec2 md:w-full w-[95%] mx-auto h-auto pb-5 md:mt-0 mt-20 py-10"
          style={{
            background:
              "url('https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9722.jpg')",backgroundPosition:"center"
          }}
        >
          <h1 className="text-center md:text-5xl text-4xl font-extrabold mb-8 text-white">
            Our Acchivements
          </h1>
          <p className="text-center text-gray-400  mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            pariatur voluptas dolores voluptate ex a quidem sapiente?
          </p>
          <div className="acchivement-card mt-5 flex flex-wrap gap-5 w-full h-auto items-center justify-center">
            {/* <motion.div
              whileHover={{ y: -5 }}
              className="block md:max-w-[300px] w-full max-h-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-200 dark:hover:bg-gray-300"
            >
                <div className="img w-full h-[180px] bg-blue-500">
                <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7rOGMTsdCqguYg022QLn3-JUevJOzG-F-A&s" alt="" />
              </div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                10+ website
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-800">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              </p>
            </motion.div> */}

            {allAchivements.map((acchivement) => (
              <motion.div
                whileHover={{ y: -5 }}
                className="block md:max-w-[300px] w-full md:max-h-[350px] h-auto p-6  rounded-lg border  hover:bg-[#31cbff72] bg-[#ffffff2b]"
              >
                <div className="img w-full h-[180px] bg-blue-500">
                  <img
                    className="w-full h-full"
                    src={acchivement.aImage}
                    alt=""
                  />
                </div>
                <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
                  {acchivement.aTitle}
                </h5>
                <p className="font-normal w-full overflow-hidden text-ellipsis whitespace-nowrap text-gray-200 dark:text-gray-300">
                  {acchivement.aDescription}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* -------------------------------------------------------------------------------- */}

        <div id="#about" className="mt-14">
          <Aboutpage />
        </div>

        {/* -------------------------------------------------------------------------------- */}

        <div id="services" className="mt-14 md:px-32 py-10">
          <Servicepage />
        </div>

        {/* -------------------------------------------------------------------------------- */}
        <div id="projects" className="mt-14">
          <Projectpage />
        </div>

        {/* ----------------------------------------------------------------------------------- */}
        <div id="team-members" className="mt-14 md:px-32">
          <TeamMember />
        </div>
      </div>
    </>
  );
}

export default Homepage;
