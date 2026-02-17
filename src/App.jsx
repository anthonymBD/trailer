import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./layout/Footer.jsx";
import ModelPage from "./layout/ModelLayout.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models/:slug" element={<ModelPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;