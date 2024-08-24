import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const App = () => {
  // State to manage filters
  const [filters, setFilters] = useState({
    destination: '',
    date: '',
    price: 5000
  });

  // Function to handle filter changes from the Home component
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Navbar />
      <Home onFilterChange={handleFilterChange} />
      <Main filters={filters} />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;