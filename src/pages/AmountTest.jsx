import React, { useState } from "react";

const AmountTest = () => {
  const [amount, setAmount] = useState(1);
  const addAmount = () => {
    const add = amount + 1;
    setAmount(add);
  };
  const deleteAmount = () => {
    const remove = amount <= 1 ? 1 : amount - 1;
    setAmount(remove);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          onClick={() => addAmount()}
          style={{ width: "50px", height: "50px", backgroundColor: "green" }}
        >
          +
        </div>
        <div style={{ width: "100px", height: "50px", textAlign: "center" }}>
          {amount}
        </div>
        <div
          onClick={() => deleteAmount()}
          style={{ width: "50px", height: "50px", backgroundColor: "red" }}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default AmountTest;
