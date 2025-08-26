import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Hero from "./components/Hero";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import OpenSource from "./components/OpenSource";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/opensource" element={<OpenSource />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
