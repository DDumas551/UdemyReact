import React from "react";
import useToggle from "./Hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "🙃" : "😀"}</h1>
    </div>
  );
}
function Toggler2() {
  const [isBroken, toggleIsBroken] = useToggle(false);
  return (
    <div>
      <h1 onClick={toggleIsBroken}>{isBroken ? "😍" : "😢"}</h1>
    </div>
  );
}

export { Toggler, Toggler2 };
