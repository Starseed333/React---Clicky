import React from "react";
import "./Card.css";

const Card = props => (

  <div onClick={() => props.Click(props.id)} className="cards">
    <div className="img-container">
      <img className = "responsive-img" alt={props.name} src={props.image}/>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
   
  </div>
);

export default Card;
