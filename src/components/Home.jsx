import React from "react";
import Profile from "../assets/project/Profile.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-screen bg-gradient-to-b from-white via-red to-cyan-600 "
    // style={{"border":"5px solid red"}}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full" >
          <h3 className="text-4xl sm:text-7xl font-bold text-black " style={{"fontFamily":"Lucida Console"}}>
          Hello 👋,
I'am Ravi<br />
</h3>
<h3 style={{"fontSize":"40px","color":"black"}}>MERN Stack Developer</h3>
        
          <img src="https://readme-typing-svg.demolab.com/?lines=Hi! My name is Ravi Roshan; I am a Full-Stack%20Web%20Developer 👨🏻‍💻; Curious%20to%20learn%20new%20things !&font=Fira%20Code&center=true&width=620&height=45 & color=F1FCFE &vCenter=true&size=30&pause=1000"/>
        

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md  cursor-pointer"
              style={{"backgroundColor":"#b2ebf2","fontWeight":"bold"}}
            >
              My Project
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* <div style={{"width":"40%"}}>
          <img
            src={ProfileImage}   // Profile Image added here
            alt="my profile"
            
            // style={{"border":"2px solid red","borderRadius":"100px","margin":"auto","width":"50%"}}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
