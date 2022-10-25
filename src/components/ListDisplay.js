import ListItem from "./ListItem";
import axios from "axios";

const ListDisplay = (props) => {
  const removePlayer = (playerId) => {
    axios.delete(`http://localhost:4123/api/player/${playerId}`)
    .then(res => props.setPlayers(res.data))
  }
  return <div className="player-list">
   <h1> Add these Positions,
    QB:
    RB:
    WR:
    TE: </h1>
   <div> {props.players.map((player,index) => {
      return <ListItem player={player} key={index} removePlayer={removePlayer}/>
    })}
    </div>
    </div>;
};

export default ListDisplay;
