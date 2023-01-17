import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import postman from "../assets/postman.png";
import github from "../assets/github.png";
import chakraUI from "../assets/chakraUI.png";
import vscode from "../assets/vscode.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-600",
    },
    {
      id: 5,
      src: chakraUI,
      title: "chakra",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: postman,
      title: "Mongo DB",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-teal-400",
    },
    {
      id: 9,
      src: vscode,
      title: "VS Code",
      style: "shadow-red-400",
    },
  ];

  return (
    <div
      name="skills"
      // className="bg-gradient-to-b from-white via-red to-cyan-600 "
      style={{"backgroundColor":"white","border":"20px solid #00bcd4"}}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div>
          <p className="text-4xl  font-bold border-b-4 border-gray-500 p-2 inline" >
          Skills
          </p>
          <h4 className="py-6">These are the technologies I've worked with</h4>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0" >
          {techs.map(({ id, src, title,style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              style={{"backgroundColor":"#b2ebf2"}}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
