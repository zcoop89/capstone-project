import { useState } from "react";
import axios from "axios";

function AddForm(props) {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const addPlayer = () => {
    axios
      .post("http://localhost:4123/api/player", { name, position })
      .then((res) => props.setPlayers(res.data));
  };

  return (
    <div className="player-selector">
      <input
        className="position-box"
        placeholder="Enter a Position"
        onChange={(e) => setPosition(e.target.value)}
      />
      <input
        className="name-box"
        placeholder="Enter a Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => addPlayer()}>Add Player</button>
    </div>
  );
}

export default AddForm;
