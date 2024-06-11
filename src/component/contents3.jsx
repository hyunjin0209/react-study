export default function contents3() {
  const 구구 = () => {
    let sung = "";
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) sung += i + "*" + j + "=" + i * j + "<br/>";
    }
    document.write(sung);
  };

  const 삼육구 = () => {
    for (let a = 1; a <= 9; a++) {
      if (a === 3 || a === 6 || a === 9) {
        document.write(a + "단" + "<br/>");
        for (let b = 1; b < 10; b++)
          document.write(a + "*" + b + "=" + a * b + "<br/>");
      }
    }
  };
  const 별별 = () => {
    for (let a = 1; a <= 5; a++) {
      document.write("*".repeat(a) + "<br />");
    }

    for (let b = 5; b > 0; b--) {
      document.write("*".repeat(b) + "<br/>");
    }

    for (let c = 1; c < 6; c++) {
      document.write("&nbsp".repeat(5 - c) + "*".repeat(c) + "<br/>");
    }

    for (let d = 5; d > 0; d--) {
      document.write("&nbsp".repeat(5 - d) + "*".repeat(d) + "<br/>");
    }
  };
  return (
    <>
      <div>
        <button type="button" onClick={구구}>
          구구단
        </button>
        <button type="button" onClick={삼육구}>
          삼육구단만
        </button>
        <button type="button" onClick={별별}>
          별찍기
        </button>
      </div>
    </>
  );
}
