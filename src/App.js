import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  let urls = [
    "https://media2.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47fihp6o2bzi2czd50dpy3ckvxbdi5jymm10u1qhgq&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/vO4ik3XWjkQ2A/giphy.gif?cid=ecf05e478duubef0m871m69i6jr7rs2mx2p3o14w9686tbsq&rid=giphy.gif&ct=g",
  ];

  let urls2 = [
    "https://media0.giphy.com/media/vO4ik3XWjkQ2A/giphy.gif?cid=ecf05e478duubef0m871m69i6jr7rs2mx2p3o14w9686tbsq&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47fihp6o2bzi2czd50dpy3ckvxbdi5jymm10u1qhgq&rid=giphy.gif&ct=g",
  ];
  const [gifs, setGifs] = useState(urls);

  // useEffect execute an action when the component is renderized
  // If the deps are empty, this will execute only one time.
  useEffect(function() {
    alert('efecto ejecutado');
    setGifs(urls2);
  }, []);

  return (
    <div className="App">
      <section className="App-content">
        {gifs.map((gif) => (
          <img src={gif} alt="" />
        ))}
      </section>
      {/* <button onClick={() => setGifs(urls2)}>Reverse gifs</button> */}
    </div>
  );
}

export default App;
