import React from "react";
export default function Greet(props){
return( 
    <div>
        <p>
    Hello,{props.name}
    </p>
    <p>My address is {props.address}</p>
    </div>
);
}