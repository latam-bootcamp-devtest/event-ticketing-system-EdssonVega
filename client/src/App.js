import './App.css';
import axios from "axios"
import { useEffect,useState } from 'react';
import { EventDisplayer } from './components/eventsDisplayer/eventDisplayer';

function App() {
  
  
  return (
    <div className="App">
      <EventDisplayer />
    </div>
  );
}

export default App;


