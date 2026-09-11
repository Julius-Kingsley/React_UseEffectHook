import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
  const [count, SetCount] = useState(0);

  //1. Without dependency array

  useEffect(() => console.log("Use Effect Hook in Action"));

  //2. With dependency having empty array

  //   useEffect(() => {
  //     alert("Only first time");
  //   }, []);

  // 3. With dependency having some data in array

  useEffect(() => {
    alert("Every time it re-renders");
  }, [count]);

  return (
    <>
      <h1 className="text-center text-danger bg-dark p2">Use Effect Hook</h1>
      <h1>Counter : {count}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          SetCount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default UseEffectHook;
