import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import profileImg from "../assets/profilee.png"; // Replace with your image path

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-20">
      <div className="lg:w-1/3 lg:mr-10"> {/* Adjusted width for larger image */}
        <img
          src={profileImg}
          alt="Profile Image"
          className="w-128 h-128 lg:w-128 lg:h-128 mx-auto lg:mx-0 mb-10 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out hover-effect" // Adjusted size for larger image and added hover effect class
        />
      </div>
      <div className="lg:w-3/4 text-center lg:text-left"> {/* Adjusted width for text content */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide">
          <div>
            Manmath Ashture
          </div>
          <span className="bg-gradient-to-r from-purple-500 to-purple-200 text-transparent bg-clip-text">
            {" "}
            Full Stack Developer
          </span>
        </h1>
        <p className="mt-10 text-lg text-center lg:text-left text-neutral-500 max-w-4xl">
          I am a versatile Full Stack Developer with expertise in HTML, CSS,
          JavaScript, PHP, MySQL, React JS and Tailwind CSS. My proficiency
          extends to Object-Oriented Programming (OOP) and various programming
          languages, including Java and C++. Additionally, have a solid
          understanding of data structures, Database Management Systems (DBMS),
          and software engineering principles.
        </p>
        <div className="flex justify-center lg:justify-start my-10">
          <a
            href="https://github.com/manmath12"
            className="bg-gradient-to-r from-purple-500 to-purple-80 py-3 px-4 mx-3 rounded-md"
          >
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/manmath-ashture-09576b267/" className="py-3 px-4 mx-3 rounded-md border">
            LinkedIn
          </a>
        </div>
        {/* <div className="flex mt-10 justify-center lg:justify-start">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full lg:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
