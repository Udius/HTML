// JavaScript source code

//const btn = document.createElement('button');
//btn.innerHTML = 'Найти';
//document.getElementById('bt1');

function Btn1In(enterWrapper) {
    const dtTo = document.searchLine.dtTo;
    const dtFrom = document.searchLine.dtFrom;

    var dtTVal = dtTo.value.split('-');
    var dtFVal = dtFrom.value.split('-');

    var today = new Date();

    var todayDate = [
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
    ];

    for (let i = 0; i < 3; i++) {
        var a = Number(dtTVal[i]);
        var b = Number(dtFVal[i]);
        var c = Number(todayDate[i])
        if (a < c | b < c) {
            alert('[ERROR] - Incorrect date!');
            return
        }
    }

    for (let i = 0; i < 3; i++) {
        var a = Number(dtTVal[i]);
        var b = Number(dtFVal[i])
        if (a > b) {
            alert('[ERROR] - Second date less then the first!');
            return
        }
    }
}

const btn1 = document.searchLine.btn1;
btn1.addEventListener("click", Btn1In);

