"use strict";
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
const calculator = new Calculator();
add.addEventListener("click", () => {
    result.textContent = calculator.add(+x.value, +y.value).toString();
});
subtract.addEventListener("click", () => {
    result.textContent = calculator.subtract(+x.value, +y.value).toString();
});
class Dog {
    constructor() {
        this.dogName = "Pluto";
        this.eat = () => {
            console.log(this.dogName, "Is eating");
            console.log(this);
        };
    }
}
function sell(dog) {
    console.log("Selling", dog.dogName);
}
function buy(dog) {
    console.log("Buying", dog.dogName);
}
const pluto = new Dog();
pluto.eat();
sell(pluto);
buy(pluto);
buy({ dogName: "" });
sell({ dogName: "" });
document.getElementById("dog").addEventListener("click", pluto.eat);
function overloaded(x, y) {
    if (typeof x === "string") {
        return 1;
    }
    if (typeof x === "object") {
    }
    return 1;
}
overloaded(1, 1);
function otherOverload(x, y) {
    return "";
}
otherOverload("", 1);
function createPerson(firstName, lastName, birthDate, props) {
    return Object.assign({ firstName, lastName, birthDate }, props);
}
function createArray(first, last, ...middle) {
    return [first, ...middle, last];
}
console.log(createPerson("Maurice", "de Beijer", new Date()));
function getFirstAndRest(data) {
    const [first, ...rest] = data;
    return { first, rest };
}
const r = getFirstAndRest(["", ""]);
function getFirstAndRest2(data) {
    const [first, ...rest] = data;
    return { first, rest };
}
