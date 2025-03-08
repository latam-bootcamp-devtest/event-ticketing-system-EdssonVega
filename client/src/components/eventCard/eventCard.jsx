import React,{useEffect,useState} from 'react'
import "./eventCardStyles.css"

export const EventCard = ({image,name,date,price,getEventData}) => {

  return (
    <div className='cardContainer' onClick={getEventData}>
        <img src={image} alt={name} />
        <h1>{name}</h1>
        <h2>Date: {date}</h2>
        <h3>Price: {price}</h3>
    </div>
  )
}

