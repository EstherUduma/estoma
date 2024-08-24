import React, { useState, useEffect } from "react";
import './home.css'
import video from '../../Assets/video0.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
//imports for animation
import Aos from 'aos'
import 'aos/dist/aos.css'

// Array of destinations for the dropdown
const destinations = [
    'Bora Bora',
    'Machu Picchu',
    'Great Barrier Reef',
    'Cappadocia',
    'Guanajuato',
    'Cinque Terre',
    'Angkor Wat',
    'Taj Mahal',
    'Bali Island'
];

const Home = ({ onFilterChange }) => {
    const [formData, setFormData] = useState({
        destination: '',
        date: '',
        price: 5000
    });

    // Handler for input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onFilterChange(formData); // Call the callback with updated filters
    };

    //React hook for scroll animation
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])



    return (
        <section id="home" className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">Our Packages</span>

                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your <span>Holiday</span>
                    </h1>
                </div>

                <form onSubmit={handleSubmit} data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <select
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                            >
                                <option value="">Select a destination</option>
                                {destinations.map(dest => (
                                    <option key={dest} value={dest}>
                                        {dest}
                                    </option>
                                ))}
                            </select>
                            <GrLocation className="icon" />
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="date">Search your date:</label>
                        <div className="input flex">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max  price:</label>
                            <h3 className="total">${formData.price}</h3>
                        </div>
                        <div className="input flex">
                            <input
                                type="range"
                                name="price"
                                max="5000"
                                min="500"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button className="searchOptions flex">
                        <HiFilter className="icon" onClick={handleSubmit} />
                        <span>APPLY FILTERS</span>
                    </button>
                </form>

                <div data-aos="fade-up" className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <SiTripadvisor className="icon" />
                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Home;
