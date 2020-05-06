var prob = ""
function out() {
    document.form.textview.value = ""
    document.form.textview.value = document.form.textview.value + prob;
}    
var op = ""
var prob1
var prob2
function dec() {
    prob += "."
    console.log(prob)
    out()
}
function neg() {
    prob = "-" + prob
    console.log(prob)
    out()
}
function num0() {
    prob += "0"
    console.log(prob)
    out()
}
function num1() {
    prob += "1"
    console.log(prob)
    out()
}
function num2() {
    prob += "2"
    console.log(prob)
    out()
}
function num3() {
    prob += "3"
    console.log(prob)
    out()
}
function num4() {
    prob += "4"
    console.log(prob)
    out()
}
function num5() {
    prob += "5"
    console.log(prob)
    out()
}
function num6() {
    prob += "6"
    console.log(prob)
    out()
}
function num7() {
    prob += "7"
    console.log(prob)
    out()
}
function num8() {
    prob += "8"
    console.log(prob)
    out()
}
function num9() {
    prob += "9"
    console.log(prob)
    out()
}
function add() {
    prob1 = parseFloat(prob)
    prob = ""
    op = "+"
    out()
}
function sub() {
    prob1 = parseFloat(prob)
    prob = ""
    op = "-"
    out()
}
function mult() {
    prob1 = parseFloat(prob)
    prob = ""
    op = "*"
    out()
}
function div() {
    prob1 = parseFloat(prob)
    prob = ""
    op = "/"
    out()
}
function square() {
    prob1 = parseFloat(prob)
    prob = ""
    op = "^2"
    out()
}
function expo() {
    prob1 = parseFloat(prob)
    prob = ""
    op = "^"
    document.form.textview.value = document.form.textview.value + prob + "^";
}
function percent() {
    prob = prob * .01
    out()
}
function equals() {
    prob2 = parseFloat(prob)
    prob = ""
    if (op == "+") {
        prob = prob1 + prob2
        console.log(prob1 + prob2)
        out()
    } else if (op == "-") {
        prob = prob1 - prob2
        console.log(prob1 - prob2)
        out()
    } else if (op == "*") {
        prob = prob1 * prob2
        console.log(prob1 * prob2)
        out()
    } else if (op == "/") {
        prob = prob1 / prob2
        console.log(prob1 / prob2)
        out()
    } else if (op == "^2") {
        prob = prob1 * prob1
        out()
    } else if (op == "^") {
        prob = prob1
        for (i = 1; i < prob2; i++) {
            prob = prob * prob1
        }
        out()
    }
}
function restart() {
    prob = "";
    out()
}
