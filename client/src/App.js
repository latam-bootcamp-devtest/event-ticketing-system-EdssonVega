import './App.css';
import axios from "axios"
import { useEffect,useState } from 'react';
import { EventDisplayer } from './components/eventsDisplayer/eventDisplayer';
import { BookingHistory } from './components/bookingHistory/bookingHistory';

function App() {
  
  
  return (
    <div className="App">
      <EventDisplayer />
      <BookingHistory />
    </div>
  );
}

export default App;


