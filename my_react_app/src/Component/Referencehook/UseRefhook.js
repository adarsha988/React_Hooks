import { React, useEffect, useRef, useState } from "react";

function UseRefEX() {
  const [value, setValue] = useState(0);

  const initialReference = useRef();
  const counter = () => {
    return setValue((prev) => prev + 1);
  };
  useEffect(() => {
     initialReference.current = setInterval(counter, 1000);
    return () => {
      clearInterval( initialReference.current);
    };
  }, []);
  return (
    <div>
      <h2>timer - {value}</h2>
      <button onClick={() => clearInterval(initialReference.current)}>
        stop timer
      </button>
    </div>
  );
}

export default UseRefEX;
