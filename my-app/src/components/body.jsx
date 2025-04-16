import React from "react";
import profile from "../Images/IMG_7137.jpeg";
export default function Body(props){
    return (
      <div>
        <p>
         Name: {props.name}
        </p>
        {/* <img src={profile} alt="profile" className="w-25 h-25" /> */}
      </div>
    );
    
    }