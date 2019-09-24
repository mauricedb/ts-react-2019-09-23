import Calculator from "./calculator";

let calc: Calculator;
beforeAll(() => {
  calc = new Calculator();
});

// test.each([[1, 2, 3], [0.1, 0.2, 0.3], [-1, 10, 9]])(
//   "can add %d + %d === %d",
//   (x, y, result) => {
//     const calc = new Calculator();

//     const sum = calc.add(x, y);
//     expect(sum).toBe(result);
//   }
// );

const values = [
  { x: 1, y: 2, result: 3 },
  { x: 11, y: 2, result: 3 },
  { x: 11, y: 2, result: 13 }
];

// values.forEach(element => {
//   test(`Can add ${element.x} + 2 = 3`, () => {
//     const sum = calc.add(element.x, element.y);
//     expect(sum).toBe(element.result);
//   });
// });

test("Can add 1 + 2 = 3", () => {
  const sum = calc.add(1, 2);

  expect(sum).toBe(3);
});

// test("Can add 0.1 + 0.2 = 0.33", () => {
//   const sum = calc.add(0.1, 0.2);

//   expect(sum).toBeCloseTo(0.3, 15);
// });

test("using objects", () => {
  expect({ x: 1 }).toEqual({ x: 1 });
});
