export default function FriendsItem({
  friend,
  selectedFriend,
  onSelectedFriendHandler,
}) {
  return (
    <li className={friend?.id === selectedFriend?.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance === 0 ? "" : friend.balance > 0 ? "green" : "red"
        }
      >
        {friend.balance === 0
          ? `You and ${friend.name} are even`
          : friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}$`
          : `You owe ${friend.name} ${Math.abs(friend.balance)}$`}
      </p>
      <button
        className="button"
        onClick={() => onSelectedFriendHandler(friend?.id)}
      >
        {friend.id === selectedFriend?.id ? "Close" : "Select"}
      </button>
    </li>
  );
}
