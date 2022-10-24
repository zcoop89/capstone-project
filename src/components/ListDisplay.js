import ListItem from "./ListItem";
import axios from "axios";

const ListDisplay = (props) => {
  const removePlayer = (playerId) => {
    axios.delete(`http://localhost:4123/api/player/${playerId}`)
    .then(res => props.setPlayers(res.data))
  }
  return <div className="">
    Players List
    {props.players.map((player,index) => {
      return <ListItem player={player} key={index} removePlayer={removePlayer}/>
    })}
    </div>;
};

export default ListDisplay;
