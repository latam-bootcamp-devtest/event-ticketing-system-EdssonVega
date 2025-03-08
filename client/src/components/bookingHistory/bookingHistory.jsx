import React,{useEffect,useState} from 'react'
import axios from 'axios'
import "./bookingHistoryStyles.css"


export const BookingHistory = () => {

const [history, setHistory] = useState([])

const getHistory = async() => {
    const URL =
      "https://goldfish-app-fbulw.ondigitalocean.app/User/e708a645-c4d5-4907-a5ad-e775f16e4d07/Events?applicationId=93751094-064d-4af2-9a36-e811b3fcede9";
    await axios.get(URL).then((response) => {
      console.log(response.data);
      setHistory(response.data)
    ;
    });
}

    useEffect(() => {
      getHistory()
    }, [])
    
  return (
    <div >
       <button>
       Booking history
        </button>
        <div className='historyContainer'>
        {history.map((histor)=>(
            <div className='historyCardsContainer' key={histor.id}>
                <img src={histor.image} alt={histor.name} />
                <h1>Event name: {histor.name}</h1>
                <h2>Date: {histor.date}</h2>
                <h3>Price: {histor.price}</h3>
            </div>
))}
        </div> 
        
    </div>
  )
}
