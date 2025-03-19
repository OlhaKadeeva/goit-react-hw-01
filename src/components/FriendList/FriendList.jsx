import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        // <item key={id} item={friend} />
        <li key={friend.id}>
          <FriendListItem item={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
