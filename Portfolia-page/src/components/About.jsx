import React from "react";
import AboutImg from "../assets/image2.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Hi! I'm Bhargavi Karuturi, a passionate Frontend Developer
                who loves creating interactive, user-friendly web experiences. 
                I enjoy turning ideas into visually appealing and functional websites.
                I specialize in HTML, CSS, JavaScript, React.js, and Tailwind CSS. 
                I have experience working with responsive design, API integration,
                and performance optimization to build scalable applications.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I a passionate Database Developer who enjoys designing, optimizing, and managing structured data.
                  I have experince on MySql.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
            <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                I love building interactive web applications and am currently exploring 
                backend technologies to create full-stack solutions.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;