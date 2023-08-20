import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'

function App() {
  const [value, setValue] = useState("TEXT");

  return (
    <div className="App">
    <Counter/>
    </div>
  );
}

export default App;
