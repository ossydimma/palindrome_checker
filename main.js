
let btn = document.getElementById("bttn");


 function check() {
    let entered = document.getElementById("request").value;
    document.getElementById("feedback").style.color = "light-orange";
    document.getElementById("feedback").style.fontSize = "25px";
    let splitString = entered.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    if (entered == joinArray) {
        document.getElementById("feedback").innerText = (`${entered} is a palindrome`)
    } else {
        document.getElementById("feedback").innerText = (`${entered} is not a palindrome`)
    }
    console.log(joinArray);
};
