import Profile from "./components/Profile/Profile";
import userData from "../src/userData.json";
import FriendList from "./components/FriendList/FriendList";
import friends from "../src/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "../src/transactions.json";
import css from "../src/App.module.css";

const App = () => {
  return (
    <>
      <div className={css.container}>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div className={css.container}>
        <FriendList friends={friends} />
      </div>
      <div className={css.container}>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};

export default App;
