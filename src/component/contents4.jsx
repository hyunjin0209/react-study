export default function contents4() {
  //인풋창1개
  let num111 = 0;
  let aaa = 0;
  let num222 = 0;

  const i = (type) => {
    num111 = parseFloat(document.getElementById("numb1").value);
    aaa = type;
    document.getElementById("numb1").value = null;
  };
  const j = () => {
    num222 = parseFloat(document.getElementById("numb1").value);
    let num333 = document.getElementById("numb1");
    if (aaa === "+") {
      num333.value = num111 + num222;
    }
  };

  //인풋창2개
  let num11 = 0;
  let bb = 12;
  let num22 = 0;

  const p = (type) => {
    num11 = parseFloat(document.getElementById("numbe1").value);
    bb = type;
    document.getElementById("numbe1").value = null;
  };
  const z = () => {
    num22 = parseFloat(document.getElementById("numbe1").value);
    let num33 = document.getElementById("numbe2");
    if (bb === "+") {
      num33.value = num11 + num22;
    }
  };
  //인풋창3개 계산기
  let num1 = 0;
  let b = 0;

  const a = (type) => {
    num1 = parseFloat(document.getElementById("number1").value);
    b = type;
  };
  const d = () => {
    let num2 = parseFloat(document.getElementById("number2").value);
    let num3 = document.getElementById("number3");
    if (b === "+") {
      num3.value = num1 + num2;
    } else if (b === "-") {
      num3.value = num1 - num2;
    } else if (b === "*") {
      num3.value = num1 * num2;
    } else if (b === "/") {
      num3.value = num1 / num2;
    }
  };

  return (
    <>
      <h1>인풋창3개</h1>
      <input type="number" id="number1" />
      <button
        onClick={() => {
          a("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          a("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          a("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          a("/");
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          d("=");
        }}
      >
        =
      </button>

      <input type="number" id="number2" />
      <input type="number" id="number3" disabled />
      <br />
      <br />
      <br />
      <h1>인풋창2개</h1>
      <input type="number" id="numbe1" />
      <button
        onClick={() => {
          p("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          p("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          p("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          p("/");
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          z("=");
        }}
      >
        =
      </button>
      <input type="number" id="numbe2" />
      <br />
      <br />
      <br />
      <h1>인풋창1개</h1>
      <input type="number" id="numb1" />
      <button
        onClick={() => {
          i("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          i("-");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          i("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          i("/");
        }}
      >
        /
      </button>
      <button
        onClick={() => {
          j("=");
        }}
      >
        =
      </button>
    </>
  );
}
