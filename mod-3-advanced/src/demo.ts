enum Operation {
  Add,
  Subtract
}

class Calculator {
  calculate(operation: Operation, x: number, y: number): number {
    let result = Number.NaN;

    switch (operation) {
      case Operation.Add:
        result = this.add(x, y);
        break;
      case Operation.Subtract:
        result = this.subtract(x, y);
        break;
    }

    return result;
  }

  private add(x: number, y: number): number {
    return x + y;
  }

  private subtract(x: number, y: number): number {
    return x - y;
  }
}

const x = document.getElementById("x") as HTMLInputElement;
const y = <HTMLInputElement>document.getElementById("y");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const result = document.getElementById("result");

const calculator = new Calculator();

add.addEventListener("click", () => {
  result.textContent = calculator
    .calculate(Operation.Add, +x.value, +y.value)
    .toString();
});

subtract.addEventListener("click", () => {
  result.textContent = calculator
    .calculate(Operation.Subtract, +x.value, +y.value)
    .toString();
});

function fetchJokes() {
  fetch(
    "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript"
  );

  return {
    value: [
      {
        id: 510,
        joke: "Chuck Norris can compile syntax errors.",
        categories: ["nerdy"]
      }
    ]
  };
}

function printJokes() {
  const jokes = fetchJokes();
  console.table(jokes.value);
}

printJokes();
