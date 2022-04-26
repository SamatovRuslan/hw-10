import React, { useState } from "react";
import Form from "./Form";

const obj = [
  {
    name: "Ruslan",
  },
];

export default function Result() {
  const [secondResult, setSecondResult] = useState();
  const [thirdResult, setThirdResult] = useState(obj);
//   console.log(thirdResult);
  function getData(props) {
    var dataObj = {
      ...props,
    };
    setSecondResult(dataObj.secondData);
  }

  function saveData(props) {
    setThirdResult((prevState) => {
      return [...prevState, props];
    });
  }

  return (
    <div>
      <Form onAdd={getData} onSave={saveData} />
      <h3>Second Input: {secondResult}</h3>
      {thirdResult.map((item)=>{
          return <h2>Third Input: {item.thirdData}</h2> 
      })}
    </div>
  );
}
