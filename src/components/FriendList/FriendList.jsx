import FriendItem from './FriendItem';
import { List } from './FriendList.styled';

const FriendList = ({ friends }) => (
  <List>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </List>
);

export default FriendList;
