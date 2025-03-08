import './App.css';
import axios from "axios"
import { useEffect,useState } from 'react';
import { EventDisplayer } from './components/eventsDisplayer/eventDisplayer';
import { getData } from './components/requests/getRequest';

function App() {
//https://goldfish-app-fbulw.ondigitalocean.app/swagger/v1/swagger.json
//https://goldfish-app-fbulw.ondigitalocean.app/get
  
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className="App">
      <EventDisplayer />
    </div>
  );
}

export default App;


