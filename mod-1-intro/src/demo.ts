"use strict";

class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
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
  result.textContent = calculator.add(+x.value, +y.value).toString();
});

subtract.addEventListener("click", () => {
  result.textContent = calculator.subtract(+x.value, +y.value).toString();
});

// var aNumber = 1;
// let aString = "A";
// aNumber = aString;

// const two = "two";
// aString = two;

interface IsADog {
  eat();
}

type AlsoADog = {
  eat();
  dogName: string;
};

type AttackDog = {
  attack();
};

type GuardDog = AlsoADog & AttackDog & IsADog;

class Dog implements IsADog, AlsoADog {
  dogName = "Pluto";
  eat = () => {
    console.log(this.dogName, "Is eating");
    console.log(this);
  };
}

type NamedDog = { dogName: string };
function sell(dog: NamedDog) {
  console.log("Selling", dog.dogName);
}

function buy(dog: { dogName: string }) {
  console.log("Buying", dog.dogName);
}

const pluto = new Dog();
pluto.eat();

sell(pluto);
buy(pluto);

buy({ dogName: "" });
sell({ dogName: "" });

document.getElementById("dog").addEventListener("click", pluto.eat);

// const add1 = function (x, y) {
//   return x + y;
// }

// const add2 = x => x + y;

function overloaded(x: Date, y: string): string;
function overloaded(x: string, y: number): number;
function overloaded(x: number, y: number): number;

function overloaded(x: any, y: any): any {
  if (typeof x === "string") {
    return 1;
  }

  if (typeof x === "object") {
  }

  return 1;
}

overloaded(1, 1);
// overloaded(true, false);

type StringOrNumber = string | number;
function otherOverload(x: StringOrNumber, y: StringOrNumber): StringOrNumber {
  return "";
}

otherOverload("", 1);

function createPerson(
  firstName: string,
  lastName: string,
  birthDate: Date,
  props?: object
): any {
  return { firstName, lastName, birthDate, ...props };
}

function createArray(
  first: number,
  last: number,
  ...middle: number[]
): number[] {
  return [first, ...middle, last];
}

console.log(createPerson("Maurice", "de Beijer", new Date()));

type FirstAndRestResult<T> = { first: T; rest: T[] };
function getFirstAndRest<T>(data: T[]): FirstAndRestResult<T> {
  const [first, ...rest] = data;
  return { first, rest };
}

const r = getFirstAndRest(["", ""]);
// console.log(r.first.toFixed())

type FirstAndRestResult2 = { first: string; rest: string[] };
function getFirstAndRest2(data: string[]): FirstAndRestResult2 {
  const [first, ...rest] = data;
  return { first, rest };
}
