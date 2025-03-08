import React, { useState } from "react";
import "./eventModalStyles.css";
import axios from "axios";

export const EventModal = ({
  id,
  image,
  name,
  date,
  location,
  description,
  price,
  availableSeats,
  closeModal,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(0)

  const addTickets = (event) => {
    setTotalPrice(event.target.value * price);
  };

  const buyTicketsRequest = async() => {
    await axios.post("https://goldfish-app-fbulw.ondigitalocean.app/Booking",{
        eventId : id,
    customerName: customerName,
  ticketQuantity: ticketQuantity
    }).then((response)=>{
        alert(response)
    })
  }




  return (
    <div className="modalBg">
      <div className="modalContainer">
        <button className="backButton" onClick={closeModal}>
          Event details
        </button>
        <img src={image} alt={name} />
        <div className="infoContainer">
          <h1>Event: {name}</h1>
          <h2>Date: {date}</h2>
          <p>{description}</p>
          <h2>Location: {location}</h2>
          <h2>Ticket price: {price}</h2>
          <h2>Availbale seats: {availableSeats}</h2>
          {showForm && (
            <div className="ticketForm">
              <label htmlFor="">Customer name</label>
              <input type="text" onChange={(event) => addTickets(event)}/>
              <label htmlFor="">Tickets to book</label>
              <input type="number" onChange={(event) => addTickets(event)} />
              <h1>Total price: {totalPrice}</h1>
            </div>
          )}
          {showForm ? (
            <div className="confirmButtonsContainer">
              <button disabled={totalPrice === 0 ? true : false} >Book Now!</button>
              <button onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          ) : (
            <button onClick={() => setShowForm(true)}>Book ticket</button>
          )}
        </div>
      </div>
    </div>
  );
};
