var select = document.querySelector("select")
var button = document.querySelector("button")
var feedback = document.querySelector("#feedback")
var tip = document.querySelector("#tip")
var total = document.querySelector("#total")
var share = document.querySelector("#share")
var display = document.querySelector("#display-area")

button.addEventListener('click', function () {
    //if
    // feedback.style.display = "block"
    // setTimeout((() => feedback.style.display = "none"), 2000)
    var bill = document.querySelector("#bill")
    var num = document.querySelector("#num")
    var personNum = Number(num.value)
    var billNum = Number(bill.value)
    if (select.options[1].selected) {
        // var tipAmount = Number((Number(bill.value)/5).toFixed(2))
        var tipAmount = billNum/5

    }

    var totalAmount = Number(bill.value) + tipAmount
    // var shareAmount = parseInt((totalAmount / parseInt(num.value))).toFixed(2)
    var shareAmount = totalAmount/personNum
    // alert(shareAmount)
    // alert(typeof(shareAmount))
    tip.innerHTML = tipAmount
    total.innerHTML = totalAmount
    share.innerHTML = shareAmount
    display.style.display = "block"


})
