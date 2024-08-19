import React from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  return (
    <section className="navBarSection">
      <header className="header flex">
        {/* logo */}
        <div className="logoDiv">
          <a href="#" className="logo hidden">
            <h1 className="flex items-center text-xl">
              ESTOMA <MdOutlineTravelExplore className="icon" /> TRAVELS{" "}
            </h1>
          </a>
        </div>

        {/* navBar */}
        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          {/* Close Button */}
          <div className="lg:hidden block closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        {/* Toggle Button */}
        <div className="lg:hidden block toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
