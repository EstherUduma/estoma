import React from "react";
import './navbar.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Navbar = () => {
    return (
        <section className="navBarSection">
            <header className="header flex">

                {/* logo */}
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>ESTOMA <MdOutlineTravelExplore className="icon"/> TRAVELS </h1>
                    </a>
                </div>

                {/* navBar */}
                <div className="navBar">
                    <ul className="navlists flex">

                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Shop</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Pages</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">News</a>
                        </li>

                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <button className='btn'>
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div className="closeNavbar">
                        <AiFillCloseCircle className='icon'/>
                    </div>
                </div>

            </header>
        </section>
    )
}

export default Navbar