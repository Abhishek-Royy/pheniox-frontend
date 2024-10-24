import React, { useEffect, useState } from "react";
import axios from "axios";

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

  return (
    <div className="h-auto p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-800">
          Our Services
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          We offer a range of services to help you achieve your business goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-6 flex flex-col items-center text-center"
            >
              <img
                src={service.sImage}
                alt={service.sName}
                className="mb-4 w-full h-auto object-cover"
              />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.sName}
              </h2>
              <p className="text-gray-500">{service.sDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Servicepage;
