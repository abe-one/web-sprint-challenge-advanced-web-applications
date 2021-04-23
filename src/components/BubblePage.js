import React, { useEffect, useState } from "react";

import fetchColors from "../helpers/fetchColors";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getLatestColors = () =>
    fetchColors().then((res) =>
      Array.isArray(res) ? setColorList(res) : null
    );

  useEffect(() => {
    getLatestColors();
  }, []);

  return (
    <div className="container">
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        getLatestColors={getLatestColors}
      />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
