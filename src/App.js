import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import SplitBill from "./components/SplitBill";
import { useState } from "react";

function App() {
  const [friends, setFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function onSelectedFriendHandler(id) {
    if (selectedFriend?.id === id) {
      setSelectedFriend(null);
    } else {
      setSelectedFriend(friends.filter((f) => f.id === id)[0]);
    }
  }

  function onAddFriendHandler(friend) {
    setFriends([...friends, friend]);
  }

  function onSplitBillHandler(myExpense, friendExpense, personPaying) {
    const friendIndex = friends.indexOf(selectedFriend);
    if (personPaying === "You") {
      friends[friendIndex].balance += friendExpense;
    } else {
      friends[friendIndex].balance -= myExpense;
    }

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectedFriendHandler={onSelectedFriendHandler}
        />
        <AddFriend onAddFriendHandler={onAddFriendHandler} />
      </div>
      {selectedFriend ? (
        <SplitBill
          friend={selectedFriend}
          onSplitBillHandler={onSplitBillHandler}
        />
      ) : null}
    </div>
  );
}

export default App;
