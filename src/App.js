import { useState, useRef } from "react";
import "./App.css";
import WorldeGrid from "./components/WordleGrid";

const CORRECT_ANS = "cooks";
const REGEX_ALPHABETS = /^[A-Za-z]+$/;

function App() {
  //UseState to cpature and maintain array of user entered values
  const [val, setVal] = useState([
    new Array(5).fill(""),
    new Array(5).fill(""),
    new Array(5).fill(""),
    new Array(5).fill(""),
    new Array(5).fill(""),
    new Array(5).fill(""),
  ]);

  //Use Ref tp maintain the index, winner and the results after validation
  const winner = useRef(false);
  const index = useRef(0);
  const results = useRef({});

  function handleKeyDown(event) {
    if (event.key === "Enter" && !winner.current) {
      //This will trigger if user clicks ENTER button and checks whether the winnner boolean is false.
      switch (validateAnswers(index.current)) {
        case "100": // This block will execute if the word doesn't match
          index.current === 5
            ? alert(
                "Best Luck Next Time. Today's Word - " +
                  CORRECT_ANS.toUpperCase()
              )
            : index.current++; //increasing the index untill the index becomes same as row length
          break;
        case "400":
          alert("Not enough letters"); // checking whether the inputed words length are 5
          break;
        case "200":
          winner.current = true; // This will execute if the word fully matches
          break;
        default:
          console.log("Nothing matches");
      }
    } else if (event.key === "Backspace" && !winner.current) {
      //This will trigger if the user clicks BACKSPACE keyboard and checks whether the winner boolean is false
      let finalVal = null;

      // Below loop will check whether the array contains empty string, if yes then it will previous characters and if there's no empty string then it will remove from last index
      for (let i = 0; i < val[index.current].length; i++) {
        if (val[index.current][i] === "" && i !== 0) {
          finalVal = i - 1;
          break;
        } else if (i === val[index.current].length - 1) {
          finalVal = i;
          break;
        }
      }
      //updating the state when entries gets deleted, so it will reflect on the UI
      setVal([...val, (val[index.current][finalVal] = "")]);
    }

    // below if will check whether the user enters only Alphabetic characters and the lenghth should be 1 and there should not be a winner
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

  // This will execute if user clicks enter.
  // This will check if the user enters 5 characters or not
  // This will check whether the entered value matches with th expected word or not
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

  //This will execute if user enters 5 letter word and clicks enter
  //This will check expected word with the actual word by comparing the index, if index is same then it will create object and assign index as key , true as value if position matches
  // If position is not matching but the character is persent on the word, then it wil create object and assign index as key, false as boolean
  // If the character is not available on the word itself, then I'm assigning an empty string with index as key
  function checkAnswer(actual) {
    try {
      for (let i = 0; i < actual.length; i++) {
        if (actual[i] === CORRECT_ANS[i]) results.current[i] = true;
        else if (CORRECT_ANS.includes(actual[i])) results.current[i] = false;
        else results.current[i] = "";
      }

      changeColors();
      return actual === CORRECT_ANS;
    } catch (error) {
      console.log(error);
    }
  }

  //This will change the color of the grid based on results ref
  const changeColors = () => {
    // I'm getting a element based on the current index on the DOM
    // Then I'll use this node elements to change the grid color based on the results ref value
    const row = document
      .getElementById("row".concat(index.current + 1).toString())
      .querySelectorAll("div");

    for (let i = 0; i < row.length; i++) {
      let resultBoolean = results.current[row[i].getAttribute("id") - 1];
      let keyValue = document.getElementById(row[i].innerText);

      if (resultBoolean === true) {
        row[i].style.backgroundColor = "green";
        keyValue.style.backgroundColor = "green";
      } else if (resultBoolean === false) {
        row[i].style.backgroundColor = "orange";
        keyValue.style.backgroundColor = "orange";
      } else {
        row[i].style.backgroundColor = "grey";
        keyValue.style.backgroundColor = "grey";
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
