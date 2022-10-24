import AddForm from "./components/AddForm"
import ListDisplay from "./components/ListDisplay"
import Header from "./components/Header"
import axios from "axios"
import {useState, useEffect} from "react"
import "./App.css"

const App = () => {
  const [players, setPlayers] = useState([])

const getPlayers = () => {
  axios.get("http://localhost:4123/api/player")
  .then(res => setPlayers(res.data))
}
useEffect(() => {
  getPlayers()
}, [])
console.log(players)

  return (
    <div>
      <Header />
      <AddForm setPlayers = {setPlayers}/>
      <ListDisplay players = {players} setPlayers = {setPlayers}/>
    </div>
  )
}

export default App