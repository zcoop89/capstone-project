const express = require("express");
const cors = require("cors");
let players = require("./players.json");
let id = players.length + 1

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api/player", (req, res) => {
  let { name, position, } = req.body;

  const newPlayer = {
    id,
    name,
    position,
  };
  id++;

  players.push(newPlayer);
  console.log("you added a player", newPlayer);

  res.status(200).send(players);
});

app.get("/api/player", (req,res) => {
  res.status(200).send(players);
})

app.delete("/api/player/:id", (req, res) => {
  let { id } = req.params
  players = players.filter(player => {
    console.log(player, id)
    return +id !== player.id
  })
  res.status(200).send(players)
})

app.listen(4123, () => console.log("Your server is running on 4123"));
