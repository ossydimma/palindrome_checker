function check() {
    document.getElementById("feedback").style.color = "light-orange";
    document.getElementById("feedback").style.fontSize = "25px";
    let entered = document.getElementById("request").value;
    
    let splitString = entered.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    if (entered == joinArray) {
        document.getElementById("feedback").innerText = (`${entered} is a palindrome`)
    } else {
        document.getElementById("feedback").innerText = (`${entered} is not a palindrome`)
    };

    let myArr = [];
    let obj = {};
    obj.task = entered;
    myArr.push(obj);
    console.log(obj);
    console.log(myArr);

    var fs = require('fs');
    fs.writeFile("data.json", myArr, err=> {
        if (err) {
            console.log('ERROR' ,err)
        } else {
            console.log('json data is wriiten successfully')
        }
    });

};

