function heading() {
        document.getElementById("header").style.width= "100%";
    document.getElementById("header").style.opacity = "100%";
    document.getElementById("iconHeader").style.backgroundColor = "#f7f7f7";
    document.getElementById("iconHeader").style.marginTop = "0";
    document.getElementById("iconHeader").style.fontSize = "50pt";
    document.getElementById("iconText").style.display = "none";
    document.getElementById("calciOper").style.opacity="100%";
     document.getElementById("calciOper").style.width="100%";
    document.getElementById("displayResult").style.opacity="100";
     document.getElementById("displayResult").style.width="100";


    

}


function calc(number) {
    document.getElementById("finalValue").value += number;
}
function clr() {
    document.getElementById("finalValue").value = "";
}
function backSpace() {

    document.getElementById("finalValue").value = document.getElementById("finalValue").value.
        substring(0, document.getElementById("finalValue").value.length - 1);
}
function result() {
    if (document.getElementById("finalValue").value == "") {
        document.getElementById("finalValue").value = "";
        document.getElementById("RESULT").innerHTML ="";
    }
    else {
        document.getElementById("finalValue").value = eval(document.getElementById("finalValue").value);
        document.getElementById("RESULT").innerHTML = eval(document.getElementById("finalValue").value);
    }
}



