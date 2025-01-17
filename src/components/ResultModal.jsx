import React, { forwardRef, useImperativeHandle, useRef } from "react";

const NewModal = forwardRef(function ResultModal(
  { time, onReset, remainTime },
  ref
) {
  const lost = remainTime <= 0;
  const score = Math.round((1 - remainTime / (time * 1000)) * 100);

  const newref = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      open() {
        newref.current.showModal();
      },
    };
  });

  return (
    <dialog className="result-modal" ref={newref}>
      <h2>{lost && "You lost"}</h2>
      <h2>{!lost && "your score :" + score}</h2>
      <p>
        You have a {time} second{time > 1 ? "s" : ""}
      </p>
      <p>Time left : {remainTime / 1000}</p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>
  );
});

export default NewModal;
