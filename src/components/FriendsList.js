import FriendsItem from "./FriendItem";

export default function FriendsList({
  friends,
  selectedFriend,
  onSelectedFriendHandler,
}) {
  return (
    <ul className="list">
      {friends.map((friend) => (
        <FriendsItem
          friend={friend}
          selectedFriend={selectedFriend}
          onSelectedFriendHandler={onSelectedFriendHandler}
        />
      ))}
    </ul>
  );
}
