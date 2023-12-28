const swiperWrapper = document.querySelector(".swiper-wrapper");

getSale();

async function getSale() {
    const responce = await fetch('./js/sale.json');
    const saleArray = await responce.json();

    renderSale(saleArray);
}

function renderSale(saleArray) {
    saleArray.forEach(el => {
        const saleHTML = `<div class="swiper-slide">
        <img class="sale" src="./img/logo/sale-25.png" alt="sale">
        <img class="swiper-slide__photo" src="img/sale/${el.imgSrc}" alt="">
    </div>`

        swiperWrapper.insertAdjacentHTML("beforeend", saleHTML);
    });
}