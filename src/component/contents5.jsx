export default function contents5() {
  const btn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  let firstNum = 0;
  let a = null;
  let secondNum = null;
  let process = "";

  function btnClick(num) {
    if (firstNum === 0) {
      firstNum = num;
      secondNum = 0;
    } else if (firstNum !== 0) {
      secondNum = num;
    }

    process += num;
    document.getElementById("num").value = process;
  }

  function typeClick(type) {
    a = type;
    process += type;
    document.getElementById("num").value = process;
  }

  const calculate = () => {
    let result = document.getElementById("result");

    if (a === "+") {
      result.value = firstNum + secondNum;
    } else if (a === "-") {
      result.value = firstNum - secondNum;
    } else if (a === "X") {
      result.value = firstNum * secondNum;
    } else if (a === "/") {
      result.value = firstNum / secondNum;
    }
  };

  return (
    <>
      <input id="num" type="text" disabled />
      <br />

      {btn.map((data) => (
        <button
          key={data}
          onClick={() => {
            btnClick(data);
          }}
        >
          {data}
        </button>
      ))}

      <button
        onClick={() => {
          typeClick("+");
        }}
      >
        +
      </button>
      <br />
      <button onClick={calculate}> = </button>
      <br />
      <input id="result" disabled />
      <br />
    </>
  );
}
