import React, { useEffect } from "react";
import './about.css'; 
//imports for animation
import Aos from 'aos'
import 'aos/dist/aos.css'


const About = () => {
    //React hook for scroll animation
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <section id="about" className="about">
            <div data-aos="fade-up" className="aboutContent container">
                <h1 className="aboutTitle">About Us</h1>
                <p className="aboutDescription">
                    Welcome to Estoma Travels, your go-to destination for unforgettable travel experiences. 
                    We are dedicated to offering personalized and exceptional service to ensure your journeys 
                    are as memorable and enjoyable as possible.
                </p>
                <p className="aboutDescription">
                    Our team of experienced travel experts works tirelessly to curate the best travel packages 
                    and destinations, making sure that every detail is perfectly handled. Whether you're looking 
                    for a relaxing beach getaway, an adventurous mountain trek, or a cultural exploration, we 
                    have something for everyone.
                </p>
                <p className="aboutDescription">
                    At Estoma Travels, we believe that travel is not just about visiting new places, but about 
                    creating lasting memories and enriching your life. Join us as we explore the world together and 
                    discover the beauty and wonder it has to offer.
                </p>
            </div>
        </section>
    );
};

export default About;