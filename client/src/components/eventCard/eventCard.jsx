import React,{useEffect,useState} from 'react'

export const EventCard = ({image,name,date,availableSeats}) => {

  return (
    <div>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h2>{date}</h2>
        <h3>{availableSeats}</h3>
    </div>
  )
}

