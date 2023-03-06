import { useEffect } from "react";
import Keyboard from "./Keyboard";

export default function WorldeGrid(props) {
  useEffect(() => {
    document.addEventListener("keydown", props.handleKeyDown);
    return () => {
      document.removeEventListener("keydown", props.handleKeyDown);
    };
  });

  return (
    <>
      <div className="outer-grid">
        <div className="grid-wordle">
          <div id="row1" className="rows">
            <div id="1">{props.val[0][0]}</div>
            <div id="2">{props.val[0][1]}</div>
            <div id="3">{props.val[0][2]}</div>
            <div id="4">{props.val[0][3]}</div>
            <div id="5">{props.val[0][4]}</div>
          </div>
          <div id="row2" className="rows">
            <div id="1">{props.val[1][0]}</div>
            <div id="2">{props.val[1][1]}</div>
            <div id="3">{props.val[1][2]}</div>
            <div id="4">{props.val[1][3]}</div>
            <div id="5">{props.val[1][4]}</div>
          </div>
          <div id="row3" className="rows">
            <div id="1">{props.val[2][0]}</div>
            <div id="2">{props.val[2][1]}</div>
            <div id="3">{props.val[2][2]}</div>
            <div id="4">{props.val[2][3]}</div>
            <div id="5">{props.val[2][4]}</div>
          </div>
          <div id="row4" className="rows">
            <div id="1">{props.val[3][0]}</div>
            <div id="2">{props.val[3][1]}</div>
            <div id="3">{props.val[3][2]}</div>
            <div id="4">{props.val[3][3]}</div>
            <div id="5">{props.val[3][4]}</div>
          </div>
          <div id="row5" className="rows">
            <div id="1">{props.val[4][0]}</div>
            <div id="2">{props.val[4][1]}</div>
            <div id="3">{props.val[4][2]}</div>
            <div id="4">{props.val[4][3]}</div>
            <div id="5">{props.val[4][4]}</div>
          </div>
          <div id="row6" className="rows">
            <div id="1">{props.val[5][0]}</div>
            <div id="2">{props.val[5][1]}</div>
            <div id="3">{props.val[5][2]}</div>
            <div id="4">{props.val[5][3]}</div>
            <div id="5">{props.val[5][4]}</div>
          </div>
        </div>
        <Keyboard handleKeyDown={props.handleKeyDown} />
      </div>
    </>
  );
}
