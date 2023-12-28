const productsContainer = document.querySelector("#productsContainer");
const showMore = document.querySelector(".products__more");
let productsArray = [];
let counterProducts = 6;

showMore.addEventListener("click", function () {
    counterProducts += 6;

    document.querySelector("#productsContainer").textContent = "";

    if (productsArray.length <= counterProducts) {
        renderProducts(productsArray.length);
        console.log("ok");
        document.querySelector("#showMore").classList.add("none");
    } else renderProducts(counterProducts);


})

getProducts();

async function getProducts() {
    const responce = await fetch('./js/products.json');
    productsArray = await responce.json();

    renderProducts(counterProducts);

    // renderProducts(productsArray);
}

function renderProducts(counter) {
    for (let i = 0; i < counter; i++) {

        const productHTML = `<!-- Ролл -->
        <div class="card" data-id="${productsArray[i].id}">
            <img class="product-img" src="img/roll/${productsArray[i].imgSrc}" alt="${productsArray[i].title}">
            <div class="card-body">
                <p class="item-title">${productsArray[i].title}</p>
                <p data-items-in-box class="item__count">${productsArray[i].itemsInBox} шт.</p>

                <div class="details-wrapper">
                    <div class="items counter-wrapper">
                        <div class="items__control" data-action="minus">-</div>
                        <div class="items__current" data-counter>1</div>
                        <div class="items__control" data-action="plus">+</div>
                    </div>

                    <div class="price">
                        <div class="price__weight">${productsArray[i].weight}г.</div>
                        <div class="price__currency">${productsArray[i].price} ₴</div>
                    </div>
                </div>

                <button data-cart type="button" class="btn btn-block">+ у
                    кошик</button>

            </div>
        </div>
        <!-- // Ролл -->`;

        productsContainer.insertAdjacentHTML("beforeend", productHTML);
    };


}

