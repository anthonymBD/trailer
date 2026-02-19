import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Fancy from "./pages/Fancy.jsx";
import Footer from "./layout/Footer.jsx";
import ModelPage from "./layout/ModelLayout.jsx";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // important

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* ← THIS was missing */}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fancy" element={<Fancy />} />
        <Route path="/models/:slug" element={<ModelPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
