export default function Keyboard(props) {
  const buttonClicked = (event) => {
    let keyValue = event.target.innerText;
    switch (keyValue.toLowerCase()) {
      case "delete":
        keyValue = "Backspace";
        break;
      case "enter":
        keyValue = "Enter";
        break;
    }
    props.handleKeyDown({ key: keyValue });
  };

  return (
    <div className="parent-container">
      <div className="button-rows">
        <button type="button" onClick={buttonClicked}>
          Q
        </button>
        <button type="button" onClick={buttonClicked}>
          W
        </button>
        <button type="button" onClick={buttonClicked}>
          E
        </button>
        <button type="button" onClick={buttonClicked}>
          R
        </button>
        <button type="button" onClick={buttonClicked}>
          T
        </button>
        <button type="button" onClick={buttonClicked}>
          Y
        </button>
        <button type="button" onClick={buttonClicked}>
          U
        </button>
        <button type="button" onClick={buttonClicked}>
          I
        </button>
        <button type="button" onClick={buttonClicked}>
          O
        </button>
        <button type="button" onClick={buttonClicked}>
          P
        </button>
      </div>
      <div className="button-rows">
        <button type="button" onClick={buttonClicked}>
          A
        </button>
        <button type="button" onClick={buttonClicked}>
          S
        </button>
        <button type="button" onClick={buttonClicked}>
          D
        </button>
        <button type="button" onClick={buttonClicked}>
          F
        </button>
        <button type="button" onClick={buttonClicked}>
          G
        </button>
        <button type="button" onClick={buttonClicked}>
          H
        </button>
        <button type="button" onClick={buttonClicked}>
          J
        </button>
        <button type="button" onClick={buttonClicked}>
          K
        </button>
        <button type="button" onClick={buttonClicked}>
          L
        </button>
      </div>
      <div className="button-rows" id="row3">
        <button type="button" onClick={buttonClicked}>
          ENTER
        </button>
        <button type="button" onClick={buttonClicked}>
          Z
        </button>
        <button type="button" onClick={buttonClicked}>
          X
        </button>
        <button type="button" onClick={buttonClicked}>
          C
        </button>
        <button type="button" onClick={buttonClicked}>
          V
        </button>
        <button type="button" onClick={buttonClicked}>
          B
        </button>
        <button type="button" onClick={buttonClicked}>
          N
        </button>
        <button type="button" onClick={buttonClicked}>
          M
        </button>
        <button type="button" onClick={buttonClicked}>
          DELETE
        </button>
      </div>
    </div>
  );
}
