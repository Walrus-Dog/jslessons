/*
    TIP CALCULATOR

    take a food itme input
    -price

    have a running total of the meal
    have 3 options for tips with the three totals: 3 options 15%, 18%, 20%
*/

let form = document.getElementById("form");
let total = document.getElementById("total");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let orderItem = form.elements["orderItem"].value;
    let totalAmmount = form.elements["totalAmmount"].value;
    let tipPercentSelect = form.elements["tipPercentSelect"].value;

    total.innerText = `Your order of ${orderItem} comes out to a total of ${totalAmmount * parseFloat(tipPercentSelect)} with your tip`
});