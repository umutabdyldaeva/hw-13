import { useState, useEffect } from "react";
import Post from "./components/Post";
import "./App.css";

function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetch( "https://jsonplaceholder.typicode.com/photos?_limit=8" )
    .then(res => res.json())
    .then(data => setPostData(data))
  }, [])
 
  

  return (
    <div className='App'>
      <Post post={postData} />
    </div>
  );
}

export default App;
