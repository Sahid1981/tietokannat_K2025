let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
function myComp(p1, p2) {
    if (p1 > p2)
        return p1;
    if (p2 > p1)
        return p2;
    return "yhtä suuret";
}
console.log("Suurempi on: " + myComp(num1, num2));
