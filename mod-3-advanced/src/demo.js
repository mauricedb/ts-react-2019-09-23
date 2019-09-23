"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var Operation2;
(function (Operation2) {
    Operation2["Add"] = "Add";
    Operation2["Subtract"] = "Subtract";
    // Multiply
})(Operation2 || (Operation2 = {}));
// enum Operation {
//   Add=1,
//   Subtract=2
//   // Multiply
// }
class Calculator {
    calculate(operation, x, y) {
        let result = Number.NaN;
        switch (operation) {
            case "Add":
                result = this.add(x, y);
                break;
            case "Subtract":
                result = this.subtract(x, y);
                break;
            default:
                const n = operation;
                throw Error("Unexpected value " + n);
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
if (result && x) {
    if (add) {
        add.addEventListener("click", () => {
            result.textContent = calculator
                .calculate("Add", +x.value, +y.value)
                .toString();
        });
    }
    subtract &&
        subtract.addEventListener("click", () => {
            result.textContent = calculator
                .calculate("Subtract", +x.value, +y.value)
                .toString();
        });
}
function fetchThings(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const rsp = yield fetch(url);
        const json = yield rsp.json();
        return json;
        // return {
        //   value: [
        //     {
        //       id: 510,
        //       joke: "Chuck Norris can compile syntax errors.",
        //       categories: ["nerdy"]
        //     }
        //   ]
        // };
    });
}
function printJokes() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";
        const jokes = (yield fetchThings(url));
        console.table(jokes.value);
    });
}
printJokes();
let c = {
    type: "cat",
    name: "",
    sleep() { }
};
// let d: CatAndDog = {
// type: 'dog',
//   name: "",
//   sleep() {},
//   eat() {}
// };
// if (d.type === 'cat'&'dog'){
// }
function sellPet(pet) {
    console.log("Selling", pet.name);
}
function isCat(pet) {
    if (typeof pet.sleep === "function") {
        return true;
    }
    else {
        return false;
    }
}
class Snake {
}
function feedPet(pet) {
    // if (pet && typeof pet.eat === "function") {
    //   pet.eat();
    // }
    if (pet.type === "dog") {
        pet.eat();
        // pet.name = "ssss";
    }
    if (isCat(pet)) {
        pet.sleep();
    }
    if (pet instanceof Snake) {
    }
    console.log("Feedign", pet.name);
}
