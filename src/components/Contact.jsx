import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import './Project.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-white via-red to-cyan-600 p-4 text-black "
    >

      <div className=" flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Get in Touch
          </p>
          <div className="to-gray-800 pt-10 contact-ele-own ">
            <div className="flex space-x-2.5">
            <HiOutlineMail size={40} />
            <p className="text-2xl">Email : raviapk983@gmail.com</p>
            </div>
           <div className="flex space-x-2.5 py-6">
           <BsTelephone size={40} />
            <p className="text-2xl">Mobile No : 9304250578</p>
           </div>
           <div className="contact-container">
             <a className="icon" href="https://www.linkedin.com/in/ravi-roshan-60b268155/"  target="_blank"
              rel="noreferrer"
             
             ><FaLinkedin size={50} />
             <p>Linkedin</p>
             </a>


             <a className="icon" href= "https://github.com/ravi98351"
              target="_blank"
              rel="noreferrer"
             >
              <FaGithub size={50} />
              <p>Github</p>
             </a>
             <a className="icon"  href= "https://api.whatsapp.com/send/?phone=9304250578&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
             >
              <BsWhatsapp size={50}/>
              <p>WhatsApp</p>
             </a>
           </div>



          </div>
          {/* <p className="py-6 underline underline-offset-1 ">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
