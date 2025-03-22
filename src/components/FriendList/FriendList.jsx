import FriendListItem from "../FriendListItem/FriendListItem";
import clsx from "clsx";
import css from "./FriendList.module.css";

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
