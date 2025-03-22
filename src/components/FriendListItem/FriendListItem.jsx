import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ item }) => {
  return (
    <div>
      <img className={css.image} src={item.avatar} alt="Avatar" width="48" />
      <p className={css.name}>{item.name}</p>
      {item.isOnline ? (
        <p className={clsx(css.status, css.green)}>Online</p>
      ) : (
        <p className={clsx(css.status, css.red)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
