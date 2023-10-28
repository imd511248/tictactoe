import React, { useRef, useState } from "react";
import Styles from "./TicTacToe.module.scss";
import circleIcon from "../Assets/images/circles.png";
import crossIcon from "../Assets/images/cros.png";
let data = ["", "", "", "", "", "", "", "", ""];
const TicTacToe = () => {
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let array_box = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src="${crossIcon}" >`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src="${circleIcon}" >`;
      data[num] = "o";
      setCount(++count);
    }
    CheckWin();
  };

  const reset = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setLock(false);
    titleRef.current.innerHTML = `Tic-Tac-Toe`;
    array_box.map((item) => (item.current.innerHTML = ""));
  };

  const CheckWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      Won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      Won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      Won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      Won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      Won(data[8]);
    } else if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      Won(data[2]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      Won(data[6]);
    }
  };
  // ........................
  const Won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Happy:<img src=${crossIcon}> win`;
    } else {
      titleRef.current.innerHTML = `Happy:<img src=${circleIcon}> win`;
    }
  };

  return (
    <>
      <div className={Styles.container}>
        <h1 className={Styles.container__title} ref={titleRef}>
          Tic-Tac-Toe
        </h1>
        <div className={Styles.container__board}>
          <div className={Styles.container__board__row1}>
            <div className={Styles.container__board__row1__boxes} ref={box1} onClick={(e) => toggle(e, 0)}></div>
            <div className={Styles.container__board__row1__boxes} ref={box2} onClick={(e) => toggle(e, 1)}></div>
            <div className={Styles.container__board__row1__boxes} ref={box3} onClick={(e) => toggle(e, 2)}></div>
          </div>
          <div className={Styles.container__board__row2}>
            <div className={Styles.container__board__row2__boxes} ref={box4} onClick={(e) => toggle(e, 3)}></div>
            <div className={Styles.container__board__row2__boxes} ref={box5} onClick={(e) => toggle(e, 4)}></div>
            <div className={Styles.container__board__row2__boxes} ref={box6} onClick={(e) => toggle(e, 5)}></div>
          </div>
          <div className={Styles.container__board__row3}>
            <div className={Styles.container__board__row3__boxes} ref={box7} onClick={(e) => toggle(e, 6)}></div>
            <div className={Styles.container__board__row3__boxes} ref={box8} onClick={(e) => toggle(e, 7)}></div>
            <div className={Styles.container__board__row3__boxes} ref={box9} onClick={(e) => toggle(e, 8)}></div>
          </div>
        </div>
        <button
          className={Styles.container__reset}
          onClick={() => {
            reset();
          }}>
          Reset
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
