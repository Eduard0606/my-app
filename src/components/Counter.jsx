import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(0);

  function decrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count} </h1>
      <button className="button" onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}> Decrement</button>
      <div className="post">
        <div className="post__content">
          <strong>1.JavaScript</strong>
          <div>Java Script bla bla bla</div>
        </div>
        <div className="post__btns">
            <button>Delete</button>
        </div>
      </div>
      
    </div>
  );
};

export default Counter;
