import React, { useRef, useState } from "react";
import NewModal from "./ResultModal";
// import ResultModal from "./ResultModal";

const TimeChallange = ({ title, timeFrq }) => {
  // const [timerExpire, setTimeExpire] = useState(false);
  // const [isStart, setIsStart] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(timeFrq * 1000);
  // const [activeTime,setActiveTime] = useState(false)
  let timer = useRef();
  let dialog = useRef();

  const activetime = timeRemaining > 0 && timeRemaining < timeFrq * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(timeFrq * 1000);
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining((prevtime) => prevtime - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };

  return (
    <>
      <NewModal
        ref={dialog}
        status="lost"
        time={timeFrq}
        onReset={handleReset}
        remainTime={timeRemaining}
      />
      <section className="challenge">
        <h1>{title}</h1>
        <p className="challenge-time">
          {timeFrq} second{timeFrq > 1 ? "s" : ""}
        </p>

        <p>
          <button onClick={activetime ? handleStop : handleStart}>
            {activetime ? "stop" : "start"} Challange
          </button>
        </p>
        <p className={activetime ? "active" : undefined}>
          {activetime ? "Timer is Running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimeChallange;
