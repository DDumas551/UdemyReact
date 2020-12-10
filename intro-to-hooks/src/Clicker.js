import React, { useState, useEffect } from "react";

function Clicker() {
  const swAPI = "https://swapi.co/api/films";
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click Me! {count}</button>
    </div>
  );
}

export default Clicker;
