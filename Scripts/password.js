function fn1() {
    var pass = document.getElementById('text1').value;
    //alert("value is: " + str);
    if (pass == "(1,1)" || pass == "(1, 1)" || pass == "1,1" || pass == "1, 1") {
        window.location.href = "https://xroi.github.io/landing";
    } else {
        alert("lmao did you really think it's " + pass + "?")
    }

}