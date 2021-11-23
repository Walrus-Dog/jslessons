/*
    Build a Thanksgiving menu in JS

    Must have at least 8 items
    User can select which items they desire and the plate will return with the items selected.
    Can design and layout however you choose

    on submit, check if appropriate ammount of boxes are checked, if not display check correct boxes message.
    if correct ammount of tiems are checked, add items names together and display

    
*/

function subOrder() {
    //grab the elements we need 
    const dataRadio = document.querySelectorAll("[data-radio]");
    const dataCheckSide = document.querySelectorAll("[data-check-side]");
    const dataCheckDes = document.querySelectorAll("[data-check-des]");
    let orderText = document.getElementById("orderText");
    let orderSides = [];
    let orderDes = [];
    let message = "";


    //use this to reset order text each time the button is pressed
    orderText.innerHTML = "";

    dataRadio.forEach((e)=> {
        if (e.checked) {
            message += `${e.value} `
        }
    })

    dataCheckSide.forEach((e)=> {
        if (e.checked) {
            orderSides.push(e);

            if (orderSides.length > 4) {
                message = `<p>You have too many sides!</p>`
            } else {
                message += `${e.value} `
            }
        }
    })

    dataCheckDes.forEach((e)=> {
        if (e.checked) {
            orderDes.push(e);

            if (orderDes.length > 2) {
                message = `<p>You have too many desserts!</p>`
            } else {
                message += `${e.value} `
            }
        }
    })

    orderText.innerHTML = message;
}