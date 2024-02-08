import user from '../data/user.json';
import Profile from './Profile/Profile.jsx';

import data from '../data/data.json';
import Statistics from './Statistics/Statistics.jsx';

import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList.jsx';

import transactions from '../data/transactions.json';
import TransactionsHistory from './TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />;
      <TransactionsHistory items={transactions} />;
    </>
  );
}
