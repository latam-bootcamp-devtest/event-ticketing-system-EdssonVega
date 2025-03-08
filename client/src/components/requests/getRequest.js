import Axios from "axios"



export const getData = async() => {
    const URL = "https://goldfish-app-fbulw.ondigitalocean.app/Event/get"
    await Axios.get(URL).then((response)=>{
        console.log(response.data)
    })
}