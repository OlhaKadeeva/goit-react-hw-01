import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.list}>
        {friends.map((friend) => (
          <li className={css.item} key={friend.id}>
            <FriendListItem item={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
