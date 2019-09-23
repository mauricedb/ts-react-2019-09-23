enum Operation2 {
  Add = "Add",
  Subtract = "Subtract"
  // Multiply
}

// console.log(Object.keys(Operation2));

type Operation = "Add" | "Subtract";

// enum Operation {
//   Add=1,
//   Subtract=2
//   // Multiply
// }

class Calculator {
  calculate(operation: Operation, x: number, y: number) {
    let result = Number.NaN;

    switch (operation) {
      case "Add":
        result = this.add(x, y);
        break;
      case "Subtract":
        result = this.subtract(x, y);
        break;
      default:
        const n: never = operation;
        throw Error("Unexpected value " + n);
    }

    return result;
  }

  private add(x: number, y: number) {
    return x + y;
  }

  private subtract(x: number, y: number) {
    return x - y;
  }
}

const x = document.getElementById("x") as HTMLInputElement | null;
const y = <HTMLInputElement>document.getElementById("y");
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

async function fetchThings(url: string) {
  const rsp = await fetch(url);
  const json: unknown = await rsp.json();

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
}

type JokesResponse = {
  value: {
    joke: string;
  }[];
};
async function printJokes() {
  const url =
    "http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript";

  const jokes = (await fetchThings(url)) as JokesResponse;
  console.table(jokes.value);
}

printJokes();

type Cat = {
  type: "cat";
  name: string;
  sleep(): void;
};

type Dog = {
  type: "dog";
  name: string;
  eat(): void;
};

type CatOrDog = Cat | Dog;
type CatAndDog = Cat & Dog;

let c: CatOrDog = {
  type: "cat",
  name: "",
  sleep() {}
};

// let d: CatAndDog = {
// type: 'dog',
//   name: "",
//   sleep() {},
//   eat() {}
// };

// if (d.type === 'cat'&'dog'){

// }

function sellPet(pet: CatOrDog) {
  console.log("Selling", pet.name);
}

function isCat(pet: any): pet is Cat {
  if (typeof pet.sleep === "function") {
    return true;
  } else {
    return false;
  }
}

type IsCatResult = ReturnType<typeof isCat>;

class Snake {}

function feedPet(pet: Readonly<CatOrDog>) {
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

type K = Pick<Cat, "name" | "sleep">;
type K2 = Omit<Cat, "name" | "sleep">;
