// Get all the buttons and elements
let plusButtons = document.querySelectorAll(".fa-plus-circle");
let minusButtons = document.querySelectorAll(".fa-minus-circle");
let deleteButtons = document.querySelectorAll(".fa-trash-alt");
let heartButtons = document.querySelectorAll(".fa-heart");

// Increase quantity
plusButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let quantity = button.parentElement.querySelector(".quantity");
        quantity.textContent = Number(quantity.textContent) + 1;
        updateTotal();
    });
});

// Decrease quantity
minusButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        let quantity = button.parentElement.querySelector(".quantity");

        if (Number(quantity.textContent) > 0) {
            quantity.textContent = Number(quantity.textContent) - 1;
        }

        updateTotal();
    });
});

// Delete product
deleteButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.closest(".card-body").remove();
        updateTotal();
    });
});

// Like product
heartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        button.classList.toggle("liked");
    });
});

// Calculate total price
function updateTotal() {
    let products = document.querySelectorAll(".list-products .card-body");
    let total = 0;

    products.forEach(function (product) {
        let price = Number(
            product.querySelector(".unit-price").textContent.replace("$", "")
        );

        let quantity = Number(
            product.querySelector(".quantity").textContent
        );

        total += price * quantity;
    });

    document.querySelector(".total").textContent = total + " $";
}