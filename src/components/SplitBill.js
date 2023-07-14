import { useState } from "react";

export default function SplitBill({ friend, onSplitBillHandler }) {
  const [billValue, setBillValue] = useState();
  const [yourExpense, setYourExpense] = useState();
  const [whoPaying, setWhoPaying] = useState("You");

  function onSubmitHandler(e) {
    e.preventDefault();
    onSplitBillHandler(yourExpense, billValue - yourExpense, whoPaying);

    setBillValue();
    setYourExpense();
    setWhoPaying("You");
  }

  return (
    <form className="form-split-bill" onSubmit={onSubmitHandler}>
      <h2>SPLIT A BILL WITH {friend?.name}</h2>
      <label htmlFor="BillValue">💰 Bill value</label>
      <input
        type="number"
        name="BillValue"
        id="BillValue"
        value={billValue}
        onChange={(e) => setBillValue(e.target.value)}
      />
      <label htmlFor="YourExpense">🧍‍♂️ Your expense</label>
      <input
        type="number"
        name="YourExpense"
        id="YourExpense"
        value={yourExpense}
        onChange={(e) => setYourExpense(e.target.value)}
      />
      <label htmlFor="FriendExpense">👬 {friend?.name}'s expense</label>
      <input
        type="number"
        name="FriendExpense"
        id="FriendExpense"
        value={billValue - yourExpense}
        disabled
      />
      <label htmlFor="WhoPaying">💲 Who is paying the bill?</label>
      <select
        id="WhoPaying"
        value={whoPaying}
        onChange={(e) => setWhoPaying(e.target.value)}
      >
        <option value="You">You</option>
        <option value={friend?.name}>{friend?.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
