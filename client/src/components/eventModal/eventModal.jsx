import React from "react";

export const EventModal = ({id,image,name,date,location,description,price,availableSeats}) => {
  return (
    <div className="modalBg">
      <div className="modalContainer">
        <button>
          Event details
        </button>
        <img src={image} alt={name} />
        <div>
          <h1>Event: {name}</h1>
          <h2>Date: {date}</h2>
          <p>{description}</p>
          <h2>Ticket price: {price}</h2>
          <h2>Availbale seats: {availableSeats}</h2>
          <button>Book ticket</button>
        </div>
      </div>
    </div>
  );
};
