var Operation;
(function (Operation) {
    Operation[Operation["Add"] = 0] = "Add";
    Operation[Operation["Subtract"] = 1] = "Subtract";
})(Operation || (Operation = {}));
class Calculator {
    calculate(operation, x, y) {
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
    fetch("http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript");
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
