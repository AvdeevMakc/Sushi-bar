const productsContainer = document.querySelector("#productsContainer");

getProducts();

async function getProducts() {
    const responce = await fetch('./js/products.json');
    const productsArray = await responce.json();

    renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(el => {

        const productHTML = `<!-- Ролл -->
        <div class="card" data-id="${el.id}">
            <img class="product-img" src="img/roll/${el.imgSrc}" alt="${el.title}">
            <div class="card-body">
                <p class="item-title">${el.title}</p>
                <p data-items-in-box class="item__count">${el.itemsInBox} шт.</p>

                <div class="details-wrapper">
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__weight">${el.weight}г.</div>
                        <div class="price__currency">${el.price} ₴</div>
                    </div>
                </div>

                <button data-cart type="button" class="btn btn-block">+ у
                    кошик</button>

            </div>
        </div>
        <!-- // Ролл -->`;

        productsContainer.insertAdjacentHTML("beforeend", productHTML);
    });


}

