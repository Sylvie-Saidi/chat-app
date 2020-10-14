import React from 'react';
import "./Contact.css";

const Contact = ({name, image, status}) => {

   return (
   <div className="Contact">
       <h2 className="name">{name}</h2>
       <img className="image" src={image}></img>
       <div className={status? "status-online" : "status-offline"}/>
        
        <div className="status-text">{status? "Online" : "Offline"}</div>
   </div>
);
}

export default Contact;