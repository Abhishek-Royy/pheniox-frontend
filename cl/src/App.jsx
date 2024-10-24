import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contact";
// import Servicepage from "./pages/Servicepage";
// import Projectpage from "./pages/Projectpage";
import Footer from "./components/Footer";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminSignup from "./pages/admin/AdminSignup";
// import TeamMember from "./pages/TeamMember";
import Notfound from "./pages/Notfound";

import Preloader from "./components/Preloader";



function App() {

  const [loading, setLoading] = useState(true); // State for loading

  // Simulate content loading (e.g., fetch from API)
  useEffect(() => {
    // Simulate loading delay for demonstration purposes (replace with actual content loading logic)
    const loadContent = setTimeout(() => {
      setLoading(false); // Set loading to false when content is loaded
    }, 2000); // Simulated loading time of 2 seconds

    return () => clearTimeout(loadContent);
  }, []);

  return (
    <>

{loading ? ( // Display the Preloader when loading
        <Preloader />
      ) : (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          {/* <Route path="/service" element={<Servicepage />} /> */}
          {/* <Route path="/projects" element={<Projectpage />} /> */}
          <Route path="/contact" element={<Contactpage />} />
          {/* <Route path="/team-member" element={<TeamMember />} /> */}


          <Route path="*" element={<Notfound />} />


          {/* Admin Authentication */}

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/signup" element={<AdminSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
       )}
    </>
  );
}

export default App;
