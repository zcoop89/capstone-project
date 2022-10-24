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
    <div className="App">
      <input
        placeholder="position"
        onChange={(e) => setPosition(e.target.value)}
      />
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <button onClick={() => addPlayer()}>Add Player</button>
    </div>
  );
}

export default AddForm;
