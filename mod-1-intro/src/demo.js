class Calculator {
  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }
}

const x = document.getElementById("x");
const y = document.getElementById("y");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");

const calculator = new Calculator(1);

add.addEventListener("click", () => {
  result.textContent = calculator.add(x.value, y.value);
});

subtract.addEventListener("click", () => {
  result.textContent = calculator.subtract(x.value, y.value);
});
