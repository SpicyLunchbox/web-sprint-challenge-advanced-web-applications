
import React, { useEffect, useState } from "react";
import {axiosWithAuth} from '../helpers/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  //upon component mount, function getData will be called, which requests color data from api and stores it in colorList
  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
    .then(res => {
      console.log(res)
      setColorList(res.data)
    })
    .catch(err => {
      console.log(`Error: ${err}`)
    })
  }


  return (
    <div className="container">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;

