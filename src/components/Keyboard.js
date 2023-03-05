export default function Keyboard(props) {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"];

  const buttonClicked = (event) => {
    let keyValue = event.target.innerText;
    switch (keyValue.toLowerCase()) {
      case "delete":
        keyValue = "Backspace";
        break;
      case "enter":
        keyValue = "Enter";
        break;
      default:
        break;
    }
    props.handleKeyDown({ key: keyValue });
  };

  return (
    <div className="parent-container">
      <div className="button-rows">
        {row1.map((val) => {
          return (
            <button type="button" id={val} onClick={buttonClicked}>
              {val}
            </button>
          );
        })}
      </div>
      <div className="button-rows">
        {row2.map((val) => {
          return (
            <button type="button" id={val} onClick={buttonClicked}>
              {val}
            </button>
          );
        })}
      </div>
      <div className="button-rows three">
        {row3.map((val) => {
          return (
            <button type="button" id={val} onClick={buttonClicked}>
              {val}
            </button>
          );
        })}
      </div>
    </div>
  );
}
