function calcCartPrice() {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalPriceEl = document.querySelector(".total-price");
    const deliveryCost = document.querySelector(".delivery-cost");
    const deliveryCart = document.querySelector("#delivery-cart");
    let totalPrice = 0;

    cartItems.forEach(function (item) {
        const amountEl = item.querySelector("[data-counter]");      // количество
        const priceEl = item.querySelector(".price__currency");     // цена

        const currentPrice = parseInt(amountEl.textContent) * parseInt(priceEl.textContent);

        totalPrice += currentPrice;
    })

    //  отображение цены на страницу
    totalPriceEl.textContent = totalPrice;

    if (totalPrice > 0) {
        deliveryCart.classList.remove("none");
    } else deliveryCart.classList.add("none");

    if (totalPrice >= 600) {
        deliveryCost.classList.add("free");
        deliveryCost.textContent = "Безкоштовно";
    } else {
        deliveryCost.classList.remove("free");
        deliveryCost.textContent = "100 ₴";
    }

}