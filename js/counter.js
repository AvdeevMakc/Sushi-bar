window.addEventListener("click", function (e) {

    let counter;    // счетчик

    // проверка клика на + -
    if (e.target.dataset.action === "plus" || e.target.dataset.action === "minus") {
        // нашли родителя
        const counterWrapper = e.target.closest(".counter-wrapper");

        // нашли счетчик
        counter = counterWrapper.querySelector("[data-counter]");
    }

    //проверка по кнопке + - 
    if (e.target.dataset.action === "plus") {
        counter.textContent = ++counter.textContent;
    }

    if (e.target.dataset.action === "minus") {

        // запрет уменьшения счетчика меньше 1 при выборе товаров
        if (parseInt(counter.textContent) > 1) {
            counter.textContent = --counter.textContent;
        } else {
            // проверка на товар в корзине
            if (e.target.closest(".cart-wrapper") && parseInt(counter.textContent) === 1) {
                // удаление товара из корзины
                e.target.closest(".cart-item").remove();

                // отображение статуса карзины пусто/полная
                toggleCartStatus();

                // подсчет общей суммы
                calcCartPrice();
            }
        }

    }

    // проверка клина +- внутри корзины
    if (e.target.hasAttribute("data-action") && e.target.closest(".cart-wrapper")) {
        // подсчет общей суммы
        calcCartPrice();
    }
});

