import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;