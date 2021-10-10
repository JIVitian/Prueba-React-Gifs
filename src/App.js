import React from "react";
import "./App.css";
import GifsList from "./components/GifsList";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <GifsList keyword={'Marado'} />
      </section>
    </div>
  );
}

export default App;
