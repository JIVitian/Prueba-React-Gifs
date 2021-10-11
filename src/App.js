import React from "react";
import "./App.css";
import GifsList from "./components/GifsList";
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>Prueba con Gifs</h1>
        <Link to="/gif/Fort">Gifs de Fort</Link>
        <Link to="/gif/Juan">Gifs de Juan</Link>
        <Link to="/gif/sasageyo">Gifs de Sasageyo</Link>
        <Route path="/gif/:keyword" component={GifsList} />
        {/* <GifsList keyword="mate" /> */}
      </section>
    </div>
  );
}

export default App;
