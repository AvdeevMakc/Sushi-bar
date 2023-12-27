const cartWrapper = document.querySelector(".cart-wrapper");

window.addEventListener("click", function (e) {
    // проверка что кликаем на кнопке с data-cart
    if (e.target.hasAttribute("data-cart")) {

        // находим карточку где был клик
        const card = e.target.closest(".card");

        // сбор данных с выбранной карточки
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector(".product-img").getAttribute("src"),
            title: card.querySelector(".item-title").textContent,
            itemInBox: card.querySelector("[data-items-in-box]").textContent,
            weight: card.querySelector(".price__weight").textContent,
            price: card.querySelector(".price__currency").textContent,
            counter: card.querySelector("[data-counter]").textContent,
        };

        // проверка товара в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemInCart) {
            const countEl = itemInCart.querySelector("[data-counter]");
            countEl.textContent = parseInt(countEl.textContent) + parseInt(productInfo.counter);
        } else {
            const cartBasketHtml = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.weight}</div>

                    <!-- cart-item__details -->
                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${parseInt(productInfo.price)}₴</div>
                        </div>

                    </div>
                    <!-- // cart-item__details -->

                </div>
            </div>
        </div>`;

            // добавляем товар в корзину
            cartWrapper.insertAdjacentHTML("beforeend", cartBasketHtml);
        }

        // сброс количества на 1
        card.querySelector("[data-counter]").textContent = "1";

        // отображение статуса карзины пусто/полная
        toggleCartStatus();

        // подсчет общей суммы
        calcCartPrice();
    }
})