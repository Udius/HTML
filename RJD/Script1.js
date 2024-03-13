function CheckDates() {
    const dtTo = document.searchLine.dtTo;
    const dtFrom = document.searchLine.dtFrom;

    var dtTVal = dtTo.value.split('-');
    var dtFVal = dtFrom.value.split('-');

    for (let i = 0; i < 3; i++) {
        var a = Number(dtTVal[i]);
        var b = Number(dtFVal[i])
        if (a > b) {
            alert('[ERROR] - Дата !');
            return
        }
    }
}

function CheckCities() {
    const whereFrom = document.searchLine.WhereFrom;
    const whereTo = document.searchLine.WhereTo;
    const cities = ["Кыштым", "Озерск", "Челябинск", "Екатеринбург"]

    if (whereFrom.value == "") {
        alert('Поле "Откуда" пусто');
    } else if (cities.includes(whereFrom.value)) {
        alert("Неизвестный город: " + whereFrom.value);
    }

    if (whereFrom.value == "") {
        alert('Поле "Откуда" пусто');
    } else if (cities.includes(whereTo.value)) {
        alert("Неизвестный город: " + whereTo.value);
    }
}

function Include(array, value) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return 1;
        }
    }
    return 0;
}

function Btn1In(enterWrapper) {
    CheckCities();
    CheckDates();
}

function SwapBtnIn(enterWrapper) {
    var dtTo = document.searchLine.dtTo;
    var dtFrom = document.searchLine.dtFrom;
    var temp = dtTo.value;
    dtTo.value = dtFrom.value;
    dtFrom.value = temp;
}

const btn1 = document.searchLine.btn1;
const btnSwap = document.searchLine.btnSwap;
btn1.addEventListener("click", Btn1In);
btnSwap.addEventListener("click", SwapBtnIn);
