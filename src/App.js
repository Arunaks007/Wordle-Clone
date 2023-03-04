import { useState, useRef } from "react";
import "./App.css";
import WorldeGrid from "./components/WordleGrid";

const CORRECT_ANS = "break";
const REGEX_ALPHABETS = /^[A-Za-z]+$/;

function App() {
  const [val, setVal] = useState([
    new Array(5).fill(""),
    new Array(5).fill(""),
    new Array(5).fill(""),
    new Array(5).fill(""),
    new Array(5).fill(""),
    new Array(5).fill(""),
  ]);

  const winner = useRef(false);
  const index = useRef(0);
  const results = useRef({});

  function handleKeyDown(event) {
    console.log(winner.current);

    if (event.key === "Enter" && !winner.current) {
      switch (validateAnswers(index.current)) {
        case "100":
          index.current === 5
            ? alert(
                "Best Luck Next Time. Today's Word - " +
                  CORRECT_ANS.toUpperCase()
              )
            : index.current++;
          break;
        case "400":
          alert("Not enough letters");
          break;
        case "200":
          winner.current = true;
          break;
      }
    } else if (event.key === "Backspace" && !winner.current) {
      let finalVal = null;
      for (let i = 0; i < val[index.current].length; i++) {
        if (val[index.current][i] === "" && i !== 0) {
          finalVal = i - 1;
          break;
        } else if (i === val[index.current].length - 1) {
          finalVal = i;
          break;
        }
      }
      setVal([...val, (val[index.current][finalVal] = "")]);
    }

    if (
      REGEX_ALPHABETS.test(event.key) &&
      event.key.length === 1 &&
      !winner.current
    ) {
      for (let j = 0; j < val[index.current].length; j++) {
        if (val[index.current][j] === "") {
          setVal([...val, (val[index.current][j] = event.key.toUpperCase())]);
          break;
        }
      }
    }
  }

  function validateAnswers() {
    try {
      if (val[index.current].join("").length !== 5) return "400";
      else if (checkAnswer(val[index.current].join("").toLowerCase()))
        return "200";
      else return "100";
    } catch (error) {
      return "500";
    }
  }

  function checkAnswer(actual) {
    try {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] === CORRECT_ANS[i]) results.current[actual[i]] = true;
        else if (CORRECT_ANS.includes(actual[i]))
          results.current[actual[i]] = false;
        else results.current[actual[i]] = "";
      }
      changeColors();
      return actual === CORRECT_ANS;
    } catch (error) {
      console.log(error);
    }
  }

  const changeColors = () => {
    const row = document
      .getElementById("row".concat(index.current + 1).toString())
      .querySelectorAll("div");
    for (let i = 0; i < row.length; i++) {
      let resultBoolean = results.current[row[i].innerText.toLowerCase()];
      if (resultBoolean === true) {
        row[i].style.backgroundColor = "green";
      } else if (resultBoolean === false) {
        row[i].style.backgroundColor = "orange";
      }
    }
  };

  return (
    <div className="App">
      <div className="nav-bar">
        <nav>Wordle</nav>
      </div>
      <WorldeGrid val={val} handleKeyDown={handleKeyDown} />
    </div>
  );
}

export default App;
