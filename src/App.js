import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);


  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
      </form>

      <button>Delete</button>
  <PostList posts={posts} title={"Список постов 1"}/>

    </div>
  );
}

export default App;
