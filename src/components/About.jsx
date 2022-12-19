import React from "react";
//bg-gradient-to-b from-red-800 to-black
import Profile from "../assets/project/Profile.jpg";
import "./About.css"
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg=white text-black"
      style={{ border: "20px solid #4dd0e1" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </p>
        </div>
        {/* <div style={{ display: "flex", gap: "50px", height: "45%" }}
          // className="box"
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0"  
        >
          <div style={{ border: "2px solid black", width: "150%" }}>
            <img src={Profile} style={{ width: "100%", height: "100%" }} />
          </div>
          <div> */}
          <img src={Profile} className="photo"></img>
            <p className="text-xl TEXT1 ">
              Hi, my name is Ravi Roshan and I am a Full Stack Web Developer and
              Problem Solver, passionate about building digital products that
              improve everyday experience for people.
           
            </p>

            <br />

            <p className="text-xl TEXT2">
              I am Quick learner and an aspiring full-stack web developer with
              core knowledge of MERN stack technology. Looking forward to
              applying and enhancing my skills and knowledge as a developer.
            </p>
           {/* </div>
        </div> */}
      </div>
   </div>
  );
};

export default About;
