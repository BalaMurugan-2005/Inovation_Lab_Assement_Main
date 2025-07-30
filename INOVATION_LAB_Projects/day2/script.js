function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const operator = document.getElementById("operator").value;
    const num2 = parseFloat(document.getElementById("num2").value);
    let result = "";

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            result = "Cannot divide by 0";
        } else {
            result = num1 / num2;
        }
    } else {
        result = "Invalid operator";
    }

    document.getElementById("result").textContent = "Result: " + result;
}
