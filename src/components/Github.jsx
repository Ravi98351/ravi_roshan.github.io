import React from "react";  
import "./Git.css";
import "../App.css";  
import GitHubCalendar from 'react-github-calendar';
const Github = () => {  
  return (  
    // streak   
    <div className="main-container">  


<div className="education w-full h-screen  p-4 text-black bg-gradient-to-b from-cyan-600 via-green to-white">
        <h1 style={{"color":"black","fontSize":"35px"}}>Ravi Roshan Github Calender</h1>
        <div className="cal-con">
            <div className="calendar">
            <GitHubCalendar username="ravi98351" year={new Date().getFullYear()}  blockMargin={7}
             color="#189827" 
             responsive={true}/>
            </div>
        </div>
        <div className="stats">
            <img
              
                src="https://github-readme-stats.vercel.app/api?username=ravi98351&show_icons=true&include_all_commits=true&count_private=true&hide=issues,contribs&border_radius=0&locale=en&theme=dark" />


             
        </div>
    </div>



     
    </div>  
  );  
};
export default Github;