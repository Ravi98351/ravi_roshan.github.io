import React from "react";
import './Project.css';
import tmetric from "../assets/project/tmetric.png";
import skinstore from "../assets/project/skinstore.png";
import nordstrom from '../assets/project/nordstrom.png'
import travelgo from "../assets/project/travelgo.png"
import {FaPhotoVideo} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai"
const Projects = () => {

  const handleLink=(link)=>{
    
      window.open(link, "_blank")
   
  };

  

  const portfolios = [
    {
      id: 1,
      src: skinstore,
      title:"SkinStore Web Clone",
      description :"Welcome to SkinStore. For over 24 years we have been your number 1 destination for premium beauty, delivering the latest in innovative clinical skincare and luxury spa products. ",
      techstack: "HTML, CSS, JavaScript, Json-Server,DOM Api ",
      live : "https://regal-cucurucho-bea6ba.netlify.app/skincuti.html",
      code : "https://github.com/Ankur982/-profuse-yak-8322"
    },
    {
      id: 2,
      src: tmetric,
      title:"TMetric Web Clone",
      description :"TMetric is a time tracking app that delivers the best solutions for increased profitability of your business with the most efficient time and resource management",
      techstack: "HTML, CSS, JavaScript, React, MongoBD, Chakra-UI",
      live: "https://frontend-omgupta12.vercel.app/",
      code:"https://github.com/Anshul-Singla/tender-letter-2789"
   
    },
    {
      id: 3,
      src: nordstrom,
      title:"NordStrom Web Clone",
      description :"Nordstrom, Inc. is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. Since 1901, we've been committed to providing our customers with the best possible service—and to improving it every day.",
      techstack: "HTML, CSS, JavaScript",     
        live : "https://cozy-khapse-673d95.netlify.app/index.html",
        code : "https://github.com/mr-ashu/NordStrom/tree/main/Project%20Unit-3",
    },
    {
      id: 4,
      src: travelgo,
      title:"TravelGo Web Clone",
      description :"TravelGo is a leading travling site offering travel to where you want to go . Since 1901, we've been committed to providing our customers with the best possible service—and to improving it every day.",
      techstack: "HTML, CSS, JavaScript, React, MongoDb",     
        live : "https://tripadvisor-rsoni2843.web.app/",
        code : "https://github.com/sushantkr961/Travel-Go",
    },
    
  ];

  return (
    <div
      name="projects"
        className=" w-full text-black lg:h-full"
      style={{"backgroundColor":"white","border":"20px solid cyan" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out my popular project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src,title,description,techstack, live,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg" style={{"border":"7px solid #80deea","backgroundColor":"#80deea"}} >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className=" own-container">
                <p className="title-own font-bold ">{title}</p>
                <p className="desc-own font-light" style={{"fontWeight":"500"}}>{description}</p>
                <hr />
                <p className="tech-title-own font-bold ">Tech Stack</p>
                <p className="techstack-own font-medium">{techstack}</p>            
                
              </div>
              <hr />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" style={{"fontWeight":"bold"}} onClick={()=>handleLink(live)}>
                
                  <FaPhotoVideo size={"40px"}/>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" style={{"fontWeight":"bold"}} onClick={()=>handleLink(code)}>
                  <AiFillGithub size={"40px"}/>
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
