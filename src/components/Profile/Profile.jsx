import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.profile}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.nameText}>{name}</p>
        <p className={css.tagText}>{tag}</p>
        <p className={css.locationText}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemName}>Followers</span>
          <span className={css.itemNumber}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemName}>Views</span>
          <span className={css.itemNumber}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemName}>Likes</span>
          <span className={css.itemNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
