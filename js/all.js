var numberOne = document.querySelector('input[name="one"]');
var numberTwo = document.querySelector('input[name="two"]');
var numberThree = document.querySelector('input[name="three"]');
var numberFour = document.querySelector('input[name="four"]');
var numberFive = document.querySelector('input[name="five"]');
var numberSix = document.querySelector('input[name="six"]');
var numberSeven = document.querySelector('input[name="seven"]');
var numberEight = document.querySelector('input[name="eight"]');
var numberNine = document.querySelector('input[name="nine"]');
var numberZero = document.querySelector('input[name="zero"]');

// 

var body = document.querySelector('body');

// 

var calcResult = document.querySelector('.calc-result')

// 

var calcCancel = document.querySelector('input[name="cancel"]');
calcCancel.addEventListener('click', function () {
    calcResult.value = "";
})

// backspace

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 8) {
        var x = calcResult.value.length - 1;
        if (calcResult.value.length != 0 && calcResult.value.length != 1) {
            calcResult.value = calcResult.value.substring(0, x);
        } else if (calcResult.value.length = 1) {
            calcResult.value = "";
        }
    }
}, false)

// + , - , * , /

var calcPlus = document.querySelector('input[name="plus"]');
calcPlus.addEventListener('click', function () {
    var x = calcResult.value.length - 1;
    if (calcResult.value == "") {
        return
    } else if (isNaN(calcResult.value[x])) {
        return
    } else {
        calcResult.value += this.value;
    }
}, false);

body.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.keyCode==187 && e.shiftKey ) {
        var x = calcResult.value.length - 1;
        if (isNaN(calcResult.value[x]) || calcResult.value == "") {
            return
        } else {
            calcResult.value += "+";
        }
    }
}, false)

body.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.keyCode==107) {
        var x = calcResult.value.length - 1;
        if (isNaN(calcResult.value[x]) || calcResult.value == "") {
            return
        } else {
            calcResult.value += "+";
        }
    }
}, false)
// 
var calcMinus = document.querySelector('input[name="minus"]');
calcMinus.addEventListener('click', function () {
    var x = calcResult.value.length - 1;
    if (isNaN(calcResult.value[x]) && calcResult.value != "") {
        return
    } else {
        calcResult.value += this.value;
    }
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 189 || e.keyCode == 109) {
        var x = calcResult.value.length - 1;
        if (isNaN(calcResult.value[x]) && calcResult.value != "") {
            return
        } else {
            calcResult.value += "-";
        }
    }
}, false)

// 
var calcMultiply = document.querySelector('input[name="multiply"]');
calcMultiply.addEventListener('click', function () {
    var x = calcResult.value.length - 1;
    if (calcResult.value == "") {
        return
    } else if (isNaN(calcResult.value[x])) {
        return
    } else {
        calcResult.value += this.value;
    }
}, false);

body.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.keyCode==56 && e.shiftKey) {
        var x = calcResult.value.length - 1;
        if (isNaN(calcResult.value[x]) || calcResult.value == "") {
            return
        } else {
            calcResult.value += "*";
        }
    }
}, false)

body.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.keyCode==106) {
        var x = calcResult.value.length - 1;
        if (isNaN(calcResult.value[x]) || calcResult.value == "") {
            return
        } else {
            calcResult.value += "*";
        }
    }
}, false)
// 
var calcDivide = document.querySelector('input[name="divide"]');
calcDivide.addEventListener('click', function () {
    var x = calcResult.value.length - 1;
    if (calcResult.value == "") {
        return
    } else if (isNaN(calcResult.value[x])) {
        return
    } else {
        calcResult.value += this.value;
    }
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 191 || e.keyCode==111) {
        var x = calcResult.value.length - 1;
        if (calcResult.value == "") {
            return
        } else if (isNaN(calcResult.value[x])) {
            return
        } else {
            calcResult.value += "/"
        }
    }
}, false)
// 
var calcEqual = document.querySelector('input[name="equal"]');
calcEqual.addEventListener('click', function () {
    var x = calcResult.value.length - 1;
    if (calcResult.value == "") {
        return
    } else if (isNaN(calcResult.value[x])) {
        calcResult.value = eval(calcResult.value.substring(0, x));
    } else {
        calcResult.value = eval(calcResult.value);
    }
})

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 187 && e.shiftKey==false) {
        e.preventDefault();
        var x = calcResult.value.length - 1;
        if (calcResult.value == "") {
            return
        } else if (isNaN(calcResult.value[x])) {
            calcResult.value = eval(calcResult.value.substring(0, x));
        } else {
            calcResult.value = eval(calcResult.value);
        }
    }
}, false)


body.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        var x = calcResult.value.length - 1;
        if (calcResult.value == "") {
            return
        } else if (isNaN(calcResult.value[x])) {
            calcResult.value = eval(calcResult.value.substring(0, x));
        } else {
            calcResult.value = eval(calcResult.value);
        }
    }
}, false)

// number 

numberOne.addEventListener('click', function () {
    calcResult.value += this.value;
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 49 || e.keyCode==97) {
        calcResult.value += 1;
    }
}, false)
// 
numberTwo.addEventListener('click', function () {
    calcResult.value += this.value;
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 50 || e.keyCode==98) {
        calcResult.value += 2;
    }
}, false)
// 
numberThree.addEventListener('click', function () {
    calcResult.value += this.value;
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 51 || e.keyCode==99) {
        calcResult.value += 3;
    }
}, false)
// 
numberFour.addEventListener('click', function () {
    calcResult.value += this.value;
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 52 || e.keyCode==100) {
        calcResult.value += 4;
    }
}, false)
// 
numberFive.addEventListener('click', function () {
    calcResult.value += this.value;
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 53 || e.keyCode==101) {
        calcResult.value += 5;
    }
}, false)
// 
numberSix.addEventListener('click', function () {
    calcResult.value += this.value;
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 54 || e.keyCode==102) {
        calcResult.value += 6;
    }
}, false)
// 
numberSeven.addEventListener('click', function () {
    calcResult.value += this.value;
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 55 || e.keyCode==103) {
        calcResult.value += 7;
    }
}, false)
// 
numberEight.addEventListener('click', function () {
    calcResult.value += this.value;
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 56 && e.shiftKey==false ) {
        calcResult.value += 8;
    }
}, false)

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 104 && e.shiftKey==false  ) {
        calcResult.value += 8;
    }
}, false)
//
numberNine.addEventListener('click', function () {
    calcResult.value += this.value;
}, false);

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 57 || e.keyCode==105) {
        calcResult.value += 9;
    }
}, false)
// 
numberZero.addEventListener('click', function () {
	var x = calcResult.value.length - 1;
    if (calcResult.value == "" || isNaN(calcResult.value[x])) {
        return
    } else
        calcResult.value += this.value;
}, false)

body.addEventListener('keydown', function (e) {
    if (e.keyCode == 48 || e.keyCode==96) {
		var x = calcResult.value.length - 1;
        if (calcResult.value == "" || isNaN(calcResult.value[x])) {
            return
        } else
            calcResult.value += 0;
    }
}, false)