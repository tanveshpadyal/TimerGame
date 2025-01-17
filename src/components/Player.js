import { useRef, useState } from "react";
import TimeChallange from "./TimerChallange";

export default function Player() {
  const inpvalues = useRef();
  const [displayName, setDisplayName] = useState("unknown entity");

  function handleClick() {
    setDisplayName(inpvalues.current.value); // Update the display name based on the input value
  }

  return (
    <>
      <section id="player">
        <h2>Welcome {displayName}</h2>
        <p>
          <input type="text" ref={inpvalues} placeholder="Enter your name" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
      <section>
        <TimeChallange title={"Easy"} timeFrq={1} />
        <TimeChallange title={"Not Easy"} timeFrq={5} />
        <TimeChallange title={"getting tough"} timeFrq={10} />
        <TimeChallange title={"pro only"} timeFrq={15} />
      </section>
    </>
  );
}
