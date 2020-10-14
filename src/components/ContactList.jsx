import React from 'react';
import './Contact.css';

  function ContactList (props) {
    return(
     <div className="Contact">
         <h2 className="name">{props.name}</h2>
         <img className="image" src={props.image}></img>
         <div className="status">
    <div className={props.status ? "status-online" : "status-offline"}/>
    <div className="status-text">{props.status? "Online" : "Offline"}
     </div>
     </div>
     </div>
    );
  }
  export default ContactList;