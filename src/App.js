import React, { useState } from "react";
import "./App.css";
import GifsList from "./components/GifsList";

function App() {
  const [keyword, setKeyword] = useState("panda");
  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => setKeyword("Perro")}>Change Keyword</button>
        <GifsList keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
