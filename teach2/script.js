//let maney = 0;
let time = "";

function OneExpenses(name, maney) {
    this.name = name; //Введите обязательную статью расходов в этом месяце
    this.maney = maney; //Во сколько обойдется?
}

let appData = {
    //    maney: 0, //бюджет 
    //    timeData: "", //данные времени
    expenses: {}, //объект с обязательными расходами
    //    optionExpenses: 0, //объект с необязательными расходами
    income: [], //массив данных с доп. доходом
    savings: false
}



const maney = document.getElementById('inpManey');
appData.maney = maney.value;
appData.timeData = "2018-12-02";
appData.expenses.first = new OneExpenses(document.getElementById('inpTextFirst').value, document.getElementById('inpManeyFirst').value);
appData.expenses.second = new OneExpenses(document.getElementById('inpTextSecond').value, document.getElementById('inpManeySecond').value);
appData.expenses.optionExpenses = "1500";

document.writeln("appData.maney: ", appData.maney, "<br>");
document.writeln("appData.maney: ", appData.timeData, "<br>");
document.writeln("appData.expenses.first.name: ", appData.expenses.first.name, "<br>");
document.writeln("appData.expenses.second.name: ", appData.expenses.second.name, "<br>");
document.writeln("appData.expenses.first.maney: ", appData.expenses.first.maney, "<br>");
document.writeln("appData.expenses.second.maney: ", appData.expenses.second.maney, "<br>");
document.writeln("appData.expenses.optionExpenses: ", appData.expenses.optionExpenses, "<br>");