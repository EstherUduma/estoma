import React, {useState} from "react";
import './navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar')
    //function to toggle navBar
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    //function to remove navBar
    const removeNavbar = () => {
        setActive('navBar')
    }

    return (
        <section className="navBarSection">
            <header className="header flex">

                {/* logo */}
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>ESTOMA <MdOutlineTravelExplore className="icon" /> TRAVELS </h1>
                    </a>
                </div>

                {/* navBar */}
                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="#home" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="#packages" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="#about" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="#contact" className="navLink">Contact</a>
                        </li>

                        <button className='btn'>
                            <a href="#contact">CONTACT US TO BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className='icon' />
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>

            </header>
        </section>
    )
}

export default Navbar