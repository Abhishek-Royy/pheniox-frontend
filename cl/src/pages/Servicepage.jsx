import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
function Servicepage() {
  const [services, setServices] = useState([]);

  // Function to fetch service data from the server
  const fetchServerData = async () => {
    try {
      const response = await axios.get(
        "https://phoenixbackendapi.onrender.com/api/v1/service/services"
      );
      setServices(response.data.message);
      console.log(services);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchServerData();
  }, []);

  // ------------CARD ANNIMATIONS-------------------------------------------------------

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXspring = useSpring(x);
  const mouseYspring = useSpring(y);

  const rotateX = useTransform(mouseYspring, [-0.5, 0.5], ["17deg", "-17deg"]);
  const rotateY = useTransform(mouseXspring, [-0.5, 0.5], ["17deg", "-17deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // console.log({ xPct, yPct });

    x.set(xPct);
    y.set(yPct);
  };

  const handelMouseLeave=()=>{
    x.set(0);
    y.set(0);
  }

  return (
    <div className="h-auto px-2">
      <div className="md:max-w-full mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-200">
          Our Services
        </h1>
        <p className="text-lg text-gray-400 mb-12">
          We offer a range of services to help you achieve your business goals.
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handelMouseLeave}
              key={index}
              className=" border-r bg-gradient-to-l from-black to-purple-800  rounded-lg shadow-lg  p-6 flex flex-col items-center text-center"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.5) 0px 50px 100px -20px, rgba(0, 0, 0, 0.85) 0px 30px 60px -30px, rgba(10, 37, 64, 0.85) 0px -2px 6px 0px inset",
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
                // transform:"rotateY(25deg)"
              }}
            >
              <img
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(75px)",
                }}
                src={service.sImage}
                alt={service.sName}
                className="mb-4 w-full h-auto object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                {service.sName}
              </h2>
              <p className="text-gray-400 w-full overflow-hidden text-ellipsis whitespace-nowrap">
                {service.sDescription}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicepage;
