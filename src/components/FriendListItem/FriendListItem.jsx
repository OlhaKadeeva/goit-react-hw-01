const FriendListItem = ({ item }) => {
  return (
    <div>
      <img src={item.avatar} alt="Avatar" width="48" />
      <p>{item.name}</p>
      <p>{item.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
