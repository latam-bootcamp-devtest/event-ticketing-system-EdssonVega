import React, { useState, useEffect } from "react";
import { EventCard } from "../eventCard/eventCard";
import axios from "axios";
import "./eventDisplayer.css";
import { EventModal } from "../eventModal/eventModal";

export const EventDisplayer = () => {
  const [evens, setEvens] = useState([]);
  const [modal, setModal] = useState();
  const [showModal, setShowModal] = useState(false);

  const getRequest = async () => {
    const URL =
      "https://goldfish-app-fbulw.ondigitalocean.app/Event?applicationId=93751094-064d-4af2-9a36-e811b3fcede9";
    await axios.get(URL).then((response) => {
      console.log(response);
      setEvens(response.data);
    });
  };

  const displayModal = async(id) => {
    console.log("abrir modal")
    /*
    await axios.get(`https://goldfish-app-fbulw.ondigitalocean.app/Event/${id}`).then((response)=>{
        setShowModal(true);
        setModal(response.data);
    })*/
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      <div className="eventsContainer">
        {evens.map((eve) => (
          <EventCard
            key={eve.id}
            name={eve.name}
            image={eve.image}
            date={eve.date}
            price={eve.price}
            getEventData={()=>displayModal(eve.id)}
          />
        ))}
      </div>

      {showModal && (
        <EventModal
          id={modal.id}
          image={modal.eventImage}
          name={modal.eventName}
          date={modal.eventDate}
          description={modal.eventDescription}
          price={modal.ticketPrice}
          availableSeats={modal.availableTickets}
        />
      )}
    </div>
  );
};
