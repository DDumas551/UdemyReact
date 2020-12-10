import React from "react";
function Light(props) {
  const { color, lightOn, click } = props;
  return (
    <div
      style={{
        backgroundColor: lightOn === color ? color : "black",
        width: "200px",
        height: "200px",
        border: "3px solid grey",
        borderRadius: "50%",
        margin: "auto",
      }}
      onClick={() => click(color)}
    ></div>
  );
}

export default Light;
