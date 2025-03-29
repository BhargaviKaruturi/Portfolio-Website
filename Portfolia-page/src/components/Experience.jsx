import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaAmazon } from "react-icons/fa";
const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <span className="text-white">
              <h2 className="leading-tight">Internship, Steel Plant</h2>
              <p className="text-sm leading-tight font-thin">
                may-2024 to july-2024
              </p>
              <ul className="text-sm p-2">
                <li>- I worked as an Intern at Vizag Steel Plant, 
                      where I analyzed critical parameters of the blast furnace and
                      helped improve the prediction of the CO/CO₂ ratio 
                      using machine learning techniques in Python.</li>
                <li>- Data Analysis & Machine Learning: Used Python for predicting furnace efficiency</li>
                <li>- Database Handling: Processed large datasets for CO/CO₂ ratio analysis</li>
                <li>- Collaboration & Research: Worked with engineers to understand blast furnace operations</li>
                <li>- Problem-Solving: Identified factors affecting furnace performance</li>
                
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;