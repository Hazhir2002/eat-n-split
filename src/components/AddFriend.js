import { useState } from "react";

export default function AddFriend({ onAddFriendHandler }) {
  const [show, setShow] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newFriend = {
      id: Date.now(),
      name: friendName,
      image: friendImg,
      balance: 0,
    };

    onAddFriendHandler(newFriend);
  }

  return (
    <>
      {show ? (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <label htmlFor="friendName">🧍‍♂️ Friend Name: </label>
          <input
            type="text"
            name="friendName"
            id="friendName"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
          />
          <label htmlFor="imageURL">🖼 Image URL: </label>
          <input
            type="url"
            name="imageURL"
            id="imageURL"
            value={friendImg}
            onChange={(e) => setFriendImg(e.target.value)}
          />
          <button className="button">Add</button>
        </form>
      ) : null}
      <button className="button" onClick={() => setShow((s) => !s)}>
        {show ? "Close" : "Add Friend"}
      </button>
    </>
  );
}
