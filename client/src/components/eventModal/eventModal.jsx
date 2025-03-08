import React from "react";
import "./eventModalStyles.css"

export const EventModal = ({id,image,name,date,location,description,price,availableSeats,closeModal}) => {
  return (
    <div className="modalBg">
      <div className="modalContainer">
        <button className="backButton" onClick={closeModal}>
          Event details
        </button>
        <img src={image} alt={name} />
        <div>
          <h1>Event: {name}</h1>
          <h2>Date: {date}</h2>
          <p>{description}</p>
          <h2>Location: {location}</h2>
          <h2>Ticket price: {price}</h2>
          <h2>Availbale seats: {availableSeats}</h2>
          <button>Book ticket</button>
        </div>
      </div>
    </div>
  );
};
