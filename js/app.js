function ticketUpdate(ticketClass, ticketPrice, isIncreasing) {
    const firstClassInput = document.getElementById(ticketClass + "-input");
    let firstClassNumber = firstClassInput.value;
    if (isIncreasing == true) {
        firstClassNumber = parseInt(firstClassNumber) + 1;
    }
    else if (firstClassNumber > 0) {
        firstClassNumber = parseInt(firstClassNumber) - 1;
    };
    firstClassInput.value = firstClassNumber;

    // update price
    const ticketPriceInput = document.getElementById(ticketClass + "-ticketPrice");
    ticketPriceInput.innerText = parseInt(firstClassNumber) * ticketPrice;

    // total amount
    calculateTotal();
};

function ticketInput(ticket) {
    const firstClassInput = document.getElementById(ticket + "-input");
    const firstClassNumber = parseInt(firstClassInput.value);
    return firstClassNumber;

}


function calculateTotal() {
    const firstClassTicketPrice = ticketInput("firstClass") * 150;
    const economyTicketPrice = ticketInput("economy") * 100;
    const subTotal = firstClassTicketPrice + economyTicketPrice;

    const tax = subTotal / 10;

    const totalTicketPrice = subTotal + tax;


    // set the value in the html
    const subTotalInput = document.getElementById("sub-total");
    subTotalInput.innerText = subTotal;

    const taxInput = document.getElementById("tax");
    taxInput.innerText = tax;

    const totalPrice = document.getElementById("total");
    totalPrice.innerText = totalTicketPrice;
}


// first class ticket
document.getElementById("firstClass-plus").addEventListener("click", function () {
    ticketUpdate("firstClass", 150, true);
});
document.getElementById("firstClass-minus").addEventListener("click", function () {
    ticketUpdate("firstClass", 150, false);
});
// economy class ticekt
document.getElementById("economy-plus").addEventListener("click", function () {
    ticketUpdate("economy", 100, true);
});
document.getElementById("economy-minus").addEventListener("click", function () {
    ticketUpdate("economy", 100, false);
});

document.getElementById("confirm-ticket").addEventListener("click", function () {
    alert("Congratulations!!!You have successfully booked your tickets")
})