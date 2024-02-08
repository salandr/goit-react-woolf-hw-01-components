import { Item, Status, Avatar, Name } from './FriendList.styled';

const FriendItem = ({ avatar, name, isOnline }) => (
  <Item>
    <Status $statusType={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

export default FriendItem;
