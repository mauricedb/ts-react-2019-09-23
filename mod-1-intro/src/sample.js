class TheCalculator {
    add(x, y) {
        return x + y;
    }
    subtract(x, y) {
        return x - y;
    }
}
const calc = new TheCalculator();
console.log(calc.add(5, 12));
const person = {
    firstName: "Maurice"
};
person.lastName = "de Beijer";
// person.firstName = new Date();
