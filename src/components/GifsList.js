import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function GifsList({ keyword }) {
  const [gifs, setGifs] = useState([]);

  // useEffect execute an action when the component is renderized
  // If the deps are empty, this will execute only one time.
  useEffect(function () {
    getGifs({ keyword }).then((gifs) => setGifs(gifs));
  }, [keyword]);

  return gifs.map(({ id, title, url }) => (
    <Gif key={id} title={title} url={url} id={id} />
  ));
}
