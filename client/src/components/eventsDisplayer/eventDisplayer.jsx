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
//'https://goldfish-app-fbulw.ondigitalocean.app/Event/09c787f8-a0f8-4e65-9c49-b6fc6cccf25b?applicationId=93751094-064d-4af2-9a36-e811b3fcede9'
  const displayModal = async(id) => {
    console.log("abrir modal")
    await axios.get(`https://goldfish-app-fbulw.ondigitalocean.app/Event/${id}?applicationId=93751094-064d-4af2-9a36-e811b3fcede9`).then((response)=>{
        console.log(response.data)    
       setShowModal(true);
        setModal(response.data);
    })
  };

  const closeModal = () => {
    setShowModal(false)
  }

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
          image={modal.image}
          name={modal.name}
          date={modal.date}
          location={modal.location}
          description={modal.description}
          price={modal.price}
          availableSeats={modal.availableTickets}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};
