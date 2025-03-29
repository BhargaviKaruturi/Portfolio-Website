import React from "react";
import ProjectCard from "./projectcard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="To-Do-List"
          main="A simple and interactive To-Do List application that helps users manage their tasks efficiently."
        />
        <ProjectCard
          title="Weather Website"
          main="A real-time weather forecasting web app that provides weather updates based on city search."
        />
        <ProjectCard
          title="Language Learning Website"
          main="An interactive platform that helps users learn new languages through notes and quizzes."
        />
      </div>
    </div>
  );
};

export default Projects;