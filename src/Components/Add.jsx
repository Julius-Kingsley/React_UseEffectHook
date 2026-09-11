import React, { useEffect } from "react";

const Add = () => {
  function addition() {
    let a = 50;
    let b = 40;
    let c = parseInt(a + b);
    console.log("Addition is : " + c);
  }
  useEffect(() => {
    addition();
  });
  return (
    <>
      <h1>Additon Page</h1>
    </>
  );
};

export default Add;
