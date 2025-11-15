// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AnimatedBackground from "./Components/AnimatedBackground";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

// Apps
import TodoApp from "./Components/TodoApp";
import Calculator from "./Components/Calculator";
import WeatherApp from "./Components/WeatherApp";

// Correct CSS import
import "./styles.css";

export default function App() {
  return (
    <Router>
      <AnimatedBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
      <Footer />
    </Router>
  );
}
