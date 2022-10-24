const ListItem = (props) => {
  return (
    <div className="">
      <h1>{props.player.name}</h1>
      <p>{props.player.position}</p>
      <button onClick={() => props.removePlayer(props.player.id)}>
        Remove
      </button>
    </div>
  );
};

export default ListItem;
