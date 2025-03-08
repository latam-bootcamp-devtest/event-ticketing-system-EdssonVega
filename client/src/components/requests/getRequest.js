import axios from "axios"



export const getData = async() => {
    const URL = "http://localhost:3001/events"
    await axios.get(URL).then((response)=>{
        console.log(response.data)
    })
}