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
    setTicketQuantity(event.target.value)
    setTotalPrice(event.target.value * price);
  };

  const addCustomerName = (event) => {
    setCustomerName(event.target.value);
    console.log(customerName)
  };

  const buyTicketsRequest = async() => {
    await axios.post("https://goldfish-app-fbulw.ondigitalocean.app/Booking",{
        applicationId:"93751094-064d-4af2-9a36-e811b3fcede9",
        userId: "e708a645-c4d5-4907-a5ad-e775f16e4d07",
        eventId : id,
        ticketQuantity: ticketQuantity,
        customerName: customerName
    }).then((response)=>{
        alert("Tickets comprados correctamente!")
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
              <input type="text" onChange={(event) => addCustomerName(event)}/>
              <label htmlFor="">Tickets to book</label>
              <input type="number" onChange={(event) => addTickets(event)} />
              <h1>Total price: {totalPrice}</h1>
            </div>
          )}
          {showForm ? (
            <div className="confirmButtonsContainer">
              <button disabled={totalPrice === 0 ? true : false} onClick={buyTicketsRequest}>Book Now!</button>
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
