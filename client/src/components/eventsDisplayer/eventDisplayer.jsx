import React, { useState,useEffect } from "react";
import { EventCard } from "../eventCard/eventCard";
import { getData } from "../requests/getRequest";

export const EventDisplayer = () => {
  const [events, setEvents] = useState([]);


  useEffect(()=>{
    getData()
  }, [])
  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.map((eve) => {
        <EventCard
          key={eve.id}
          image={eve.image}
          name={eve.name}
          date={eve.date}
          availableSeats={eve.availableSeats}
        />;
      })}
    </div>
  );
};
