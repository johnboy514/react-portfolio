import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
      <div className="small-screen hidden">
        </div>
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-7xl font-bold text-blue">
            About
          </h1>
          <p className="text-gray-500 py-4 max-w-md">
          I am currently learning to become a full stack web developer. I have enjoyed working with computers and using them throughout my life and wanted to deepen my understanding and possibly make a living off it at the same time.
          </p>
        </div>
        <div className="big-screen">
        </div>

      </div>
    </div>
  );
};

export default About;