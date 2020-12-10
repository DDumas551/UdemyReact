import React, { useState } from "react";
import Light from "./Light";

function TrafficLight() {
  const colors = ["red", "yellow", "green"];
  const [light, changeLight] = useState("red");
  return (
    <div
      style={{
        border: "1px solid black",
        width: "250px",
        height: "650px",
        backgroundColor: "black",
      }}
    >
      {colors.map((color) => (
        <Light
          lightOn={light}
          color={color}
          click={changeLight}
        />
      ))}
    </div>
  );
}

export default TrafficLight;
