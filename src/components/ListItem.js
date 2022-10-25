const ListItem = (props) => {
  return (
    <div className="list-item">
      <h1>{props.player.name}</h1>
      <h2>{props.player.position}</h2>
      <button onClick={() => props.removePlayer(props.player.id)}>
        Remove
      </button>
    </div>
  );
};

export default ListItem;
