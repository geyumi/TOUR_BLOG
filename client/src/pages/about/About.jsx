import { useContext, useState } from "react";
import "./about.css";
import axios from "axios";
import { Context } from "../../context/Context";
import Header from '../../components/header/Header'

import Sidebar from '../../components/sidebar/Sidebar'

export default function About() {
  
    return (
        <div>
            
            <div className='about'>
            <div className="company-details">
      <h1>About Our Company</h1>
      <p>
        Welcome to [Company Name], your premier travel partner in Sri Lanka. We
        are passionate about showcasing the natural beauty, rich culture, and
        warm hospitality of our homeland.
      </p>
      <p>
        Our mission is to provide you with authentic and immersive travel
        experiences that leave a lasting impact. Explore pristine beaches,
        ancient temples, lush rainforests, and vibrant cities with us.
      </p>
      <p>
        Join us on a journey to discover the hidden gems of Sri Lanka. We offer
        a wide range of travel options that cater to all interests, including
        custom itineraries and eco-friendly tours. Let our team of dedicated
        professionals make your trip an adventure of a lifetime.
      </p>



      <div className="company-image">
      {/* Add your company images here */}
      <img src="/path/to/your/image1.jpg" alt="Company Image 1" />
      <img src="/path/to/your/image2.jpg" alt="Company Image 2" />
      {/* Add more images as needed */}
    </div>


    <div className="company-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63320.41806361643!2d80.58458129011017!3d7.294628573355699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1697629866352!5m2!1sen!2slk"
    width="600"
    height="450"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>







    </div>
                
                <Sidebar/>
            </div>
        </div>
      )

  
}