import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function GifsList({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect execute an action when the component is renderized
  // If the deps are empty, this will execute only one time.
  useEffect(
    function () {
      setLoading(true);
      getGifs({ keyword }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    },
    [keyword]
  );

  return loading ? (
    <img src="../img/loading.gif" alt="Loading..." />
  ) : (
    gifs.map(({ id, title, url }) => (
      <Gif key={id} title={title} url={url} id={id} />
    ))
  );
}
